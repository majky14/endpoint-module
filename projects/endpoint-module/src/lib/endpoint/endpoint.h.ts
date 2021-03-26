import { Type } from '@angular/core';
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
  endpoint: string;
  customEndpoint?: Type<Endpoint<any>>;
  requestTransformer?: Type<ITransformer<any>>;
  responseTransformer?: Type<ITransformer<any>>;
}

export interface EndpointDecoratorOptions {
  endpoint: string;
}
