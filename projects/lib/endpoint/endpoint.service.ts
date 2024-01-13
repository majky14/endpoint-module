import { inject, Injectable } from '@angular/core';
import { NGX_NETWORK_CLIENT_TOKEN } from '../network-client';

import { NgxEndpointBase } from './endpoint.base';
import { NGX_ENDPOINT_CONFIG_TOKEN } from './endpoint.config';
import { NgxEndpointInterface, NgxEndpointOptions } from './endpoint.interface';

@Injectable({ providedIn: 'root' })
export class NgxEndpointService {
  public static instance: NgxEndpointService;

  private _endpoints: Map<string, NgxEndpointInterface<any>> = new Map<string, NgxEndpointInterface<any>>();

  protected client = inject(NGX_NETWORK_CLIENT_TOKEN);
  protected config = inject(NGX_ENDPOINT_CONFIG_TOKEN);

  public create<T>(endpoint: string): NgxEndpointInterface<T> {
    const existing = this.get<T>(endpoint);

    if (existing) {
      return existing;
    }

    const options = this.getEndpointOptions(endpoint);

    let endpointInstance = new NgxEndpointBase<T>(
      `${this.config.baseUrl}/${options.name}`,
      this.client,
    );

    this._endpoints.set(options.name, endpointInstance);

    return endpointInstance;
  }

  public get<T>(key: string): NgxEndpointInterface<T> | undefined {
    return this._endpoints.get(key);
  }

  private getEndpointOptions(endpoint: string): NgxEndpointOptions {
    const configEndpoint = this.config.endpoints?.find(e => e.name === endpoint);

    return configEndpoint ?? { name: endpoint };
  }
}
