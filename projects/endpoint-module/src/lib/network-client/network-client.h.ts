import { Observable } from 'rxjs';

export interface INetworkClient {
  delete(url: string, options?: object): Observable<any>;
  get(url: string, options?: object): Observable<any>;
  head(url: string, options?: object): Observable<any>;
  patch(url: string, body: any, options?: object): Observable<any>;
  post(url: string, body: any, options?: object): Observable<any>;
  put(url: string, body: any, options?: object): Observable<any>;
}
