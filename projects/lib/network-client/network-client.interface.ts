import { Observable } from 'rxjs';

export interface NgxNetworkClientInterface {
  delete<T>(url: string, options?: object): Observable<T>;
  get<T>(url: string, options?: object): Observable<T>;
  head<T>(url: string, options?: object): Observable<T>;
  patch<T, Body>(url: string, body: Body, options?: object): Observable<T>;
  post<T, Body>(url: string, body: Body, options?: object): Observable<T>;
  put<T, Body>(url: string, body: Body, options?: object): Observable<T>;
}
