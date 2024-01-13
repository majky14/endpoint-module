import { NgxNetworkClientInterface } from '~/lib/network-client';

import { NgxEndpointInterface } from './endpoint.interface';

export class NgxEndpointBase<T> implements NgxEndpointInterface<T> {
  constructor(
    protected endpoint: string,
    protected client: NgxNetworkClientInterface
  ) {}

  public create<Body>(body: Body) {
    return this.client.post<T, Body>(this.endpoint, body);
  }

  public read(id: string) {
    return this.client.get<T>(`${this.endpoint}/${id}`);
  }

  public update<Body>(id: string, body: Body) {
    return this.client.patch<T, Body>(`${this.endpoint}/${id}`, body);
  }

  public delete(id: string) {
    return this.client.delete<T>(`${this.endpoint}/${id}`);
  }
}
