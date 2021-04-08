import { Inject, Injectable, Injector } from '@angular/core';

import { INetworkClient, NETWORK_CLIENT_TOKEN } from '../network-client';

import { ENDPOINT_CONFIG_TOKEN, IEndpointConfig } from './endpoint.config';
import { IEndpoint } from './endpoint.h';
import { BaseTransformer } from './endpoint.transformer';
import { Endpoint } from './endpoint';

@Injectable({ providedIn: 'root' })
export class EndpointService {
  public static instance: EndpointService;

  private _endpoints: Map<string, IEndpoint<any>> = new Map<string, IEndpoint<any>>();

  constructor(
    protected inj: Injector,
    @Inject(NETWORK_CLIENT_TOKEN) protected client: INetworkClient,
    @Inject(ENDPOINT_CONFIG_TOKEN) protected config: IEndpointConfig
  ) {
    EndpointService.instance = this;
  }

  public create<T>(endpoint: string): IEndpoint<T> {
    const existing = this.get<T>(endpoint);
    if (existing) {
      return existing;
    }
    const options = this.config.endpoints?.find(e => e.endpointName === endpoint) || { endpointName: endpoint };
    let endpointInstance;
    if (options.endpointToken) {
      endpointInstance = this.inj.get(options.endpointToken);
    } else {
      options.endpoint = options.endpoint || Endpoint;
      let requestTransformer;
      if (options.requestTransformerToken) {
        requestTransformer = this.inj.get(options.requestTransformerToken);
      } else {
        requestTransformer = new (options.requestTransformer || BaseTransformer)();
      }
      let responseTransformer;
      if (options.responseTransformerToken) {
        responseTransformer = this.inj.get(options.responseTransformerToken);
      } else {
        responseTransformer = new (options.responseTransformer || BaseTransformer)();
      }
      endpointInstance = new options.endpoint(
        `${this.config.baseUrl}/${options.endpointName}`,
        this.client,
        requestTransformer,
        responseTransformer
      );
    }
    this._endpoints.set(options.endpointName, endpointInstance);
    return endpointInstance;
  }

  public get<T>(key: string): IEndpoint<T> {
    return this._endpoints.get(key);
  }
}
