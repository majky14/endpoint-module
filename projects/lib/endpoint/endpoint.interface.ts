import { Observable } from 'rxjs';

export interface NgxEndpointInterface<Response> {
  create<Body>(body: Body): Observable<Response>;
  read(id: string): Observable<Response>;
  update<Body>(id: string, body: Body): Observable<Response>;
  delete(id: string): Observable<Response>;
}

export interface NgxEndpointOptions {
  name: string;
}
