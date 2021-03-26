import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IEndpoint, ITransformer } from './endpoint.h';

export class Endpoint<T> implements IEndpoint<T> {
  constructor(
    protected endpoint: string,
    protected http: HttpClient,
    protected requestTransformer: ITransformer<T>,
    protected responseTransformer: ITransformer<T>,
  ) { }

  public list(): Observable<T[]> {
    return (this.http.get(this.endpoint) as Observable<T[]>).pipe(
      map(response => response.map(r => this.responseTransformer.transform(r)))
    );
  }

  public create(body: Partial<T>): Observable<T> {
    return this.http.post(this.endpoint, this.requestTransformer.transform(body)) as Observable<T>;
  }

  public read(id: string): Observable<T> {
    return (this.http.get(`${this.endpoint}/${id}`) as Observable<T>).pipe(
      map(response => this.responseTransformer.transform(response))
    );
  }

  public update(id: string, body: Partial<T>): Observable<T> {
    return this.http.patch(`${this.endpoint}/${id}`, this.requestTransformer.transform(body)) as Observable<T>;
  }

  public delete(id: string): Observable<T> {
    return this.http.delete(`${this.endpoint}/${id}`) as Observable<T>;
  }
}
