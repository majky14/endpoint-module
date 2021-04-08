import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { INetworkClient } from './network-client.h';

export const NETWORK_CLIENT_TOKEN = new InjectionToken<INetworkClient>(
  'ENDPOINT_MODULE_NETWORK_CLIENT_TOKEN'
);

@Injectable()
export class NetworkClient implements INetworkClient {

  constructor(
    protected http: HttpClient
  ) { }

  delete(url: string, options?: object): Observable<any> {
    return this.http.delete(url, options);
  }

  get(url: string, options?: object): Observable<any> {
    return this.http.get(url, options);
  }

  head(url: string, options?: object): Observable<any> {
    return this.http.head(url, options);
  }

  patch(url: string, body: any, options?: object): Observable<any> {
    return this.http.patch(url, body, options);
  }

  post(url: string, body: any, options?: object): Observable<any> {
    return this.http.post(url, body, options);
  }

  put(url: string, body: any, options?: object): Observable<any> {
    return this.http.put(url, body, options);
  }
}
