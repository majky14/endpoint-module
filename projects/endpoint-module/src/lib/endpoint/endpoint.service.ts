import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Type } from '@angular/core';
import { Endpoint } from './endpoint';

import { EndpointConfigToken, IEndpointConfig } from './endpoint.config';
import { EndpointOptions, IEndpoint, ITransformer } from './endpoint.h';
import { BaseTransformer } from './endpoint.transformer';

@Injectable({ providedIn: 'root' })
export class EndpointService {
  public static instance: EndpointService;

  private _endpoints: Map<string, IEndpoint<any>> = new Map<string, IEndpoint<any>>();

  constructor(
    protected http: HttpClient,
    @Inject(EndpointConfigToken) protected config: IEndpointConfig
  ) {
    EndpointService.instance = this;
    (config?.endpoints ?? []).forEach(endpoint => {
      this.create(endpoint);
    });
  }

  public create<T>(options: EndpointOptions): IEndpoint<T> {
    const existing = this.get<T>(options.endpoint);
    if (existing) {
      return existing;
    }
    const endpointConstructor: Type<IEndpoint<T>> = options.customEndpoint || Endpoint;
    const requestTransformer: Type<ITransformer<T>> = options.requestTransformer || BaseTransformer;
    const responseTransformer: Type<ITransformer<T>> = options.responseTransformer || BaseTransformer;
    const endpoint = new endpointConstructor(
      `${this.config.baseUrl}/${options.endpoint}`,
      this.http,
      new requestTransformer(),
      new responseTransformer(),
    );
    this._endpoints.set(options.endpoint, endpoint);
    return endpoint;
  }

  public get<T>(key: string): IEndpoint<T> {
    return this._endpoints.get(key);
  }
}
