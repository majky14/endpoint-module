import { InjectionToken, Type } from '@angular/core';
import { Observable } from 'rxjs';

import { Endpoint } from './endpoint';

export interface IEndpoint<T> {
  list(): Observable<T[]>;
  create(body: Partial<T>): Observable<T>;
  read(id: string): Observable<T>;
  update(id: string, body: Partial<T>): Observable<T>;
  delete(id: string): Observable<T>;
}

export interface ITransformer<T> {
  transform(data: any): T;
}

export interface EndpointOptions {
  endpointName: string;
  endpoint?: Type<Endpoint<any>>;
  endpointToken?: InjectionToken<Endpoint<any>>;
  requestTransformer?: Type<ITransformer<any>>;
  requestTransformerToken?: InjectionToken<ITransformer<any>>;
  responseTransformer?: Type<ITransformer<any>>;
  responseTransformerToken?: InjectionToken<ITransformer<any>>;
}
