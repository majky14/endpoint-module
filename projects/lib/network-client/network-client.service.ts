import { HttpClient } from '@angular/common/http';
import { inject, Injectable, InjectionToken } from '@angular/core';

import { NgxNetworkClientInterface } from './network-client.interface';

export const NGX_NETWORK_CLIENT_TOKEN = new InjectionToken<NgxNetworkClientInterface>(
  'NGX_NETWORK_CLIENT_TOKEN'
);

@Injectable()
export class NgxNetworkClientService implements NgxNetworkClientInterface {
  protected http = inject(HttpClient);

  public delete<T>(url: string, options?: object) {
    return this.http.delete<T>(url, this.getReqOptions(options));
  }

  public get<T>(url: string, options?: object) {
    return this.http.get<T>(url, this.getReqOptions(options));
  }

  public head<T>(url: string, options?: object) {
    return this.http.head<T>(url, this.getReqOptions(options));
  }

  public patch<T, Body>(url: string, body: Body, options?: object) {
    return this.http.patch<T>(url, body, this.getReqOptions(options));
  }

  public post<T, Body>(url: string, body: Body, options?: object) {
    return this.http.post<T>(url, body, this.getReqOptions(options));
  }

  public put<T, Body>(url: string, body: Body, options?: object) {
    return this.http.put<T>(url, body, this.getReqOptions(options));
  }

  protected getReqOptions(options?: object): object {
    const { headers = {} } = (options ?? {}) as any;
    return {
      ...options,
      headers: {
        ...headers
      }
    };
  }
}
