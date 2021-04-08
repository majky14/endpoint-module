import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { INetworkClient } from '../network-client';

import { IEndpoint, ITransformer } from './endpoint.h';

export class Endpoint<T> implements IEndpoint<T> {
  constructor(
    protected endpoint: string,
    protected client: INetworkClient,
    protected requestTransformer: ITransformer<T>,
    protected responseTransformer: ITransformer<T>,
  ) { }

  public list(): Observable<T[]> {
    return this.client.get(this.endpoint).pipe(
      map(response => response.map(r => this.responseTransformer.transform(r)))
    );
  }

  public create(body: Partial<T>): Observable<T> {
    return this.client.post(this.endpoint, this.requestTransformer.transform(body)) as Observable<T>;
  }

  public read(id: string): Observable<T> {
    return this.client.get(`${this.endpoint}/${id}`).pipe(
      map(response => this.responseTransformer.transform(response))
    );
  }

  public update(id: string, body: Partial<T>): Observable<T> {
    return this.client.patch(`${this.endpoint}/${id}`, this.requestTransformer.transform(body)) as Observable<T>;
  }

  public delete(id: string): Observable<T> {
    return this.client.delete(`${this.endpoint}/${id}`) as Observable<T>;
  }
}
