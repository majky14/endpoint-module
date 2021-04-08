import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NETWORK_CLIENT_TOKEN, NetworkClient } from '../network-client';

import { EndpointService } from './endpoint.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    EndpointService,
    {provide: NETWORK_CLIENT_TOKEN, useClass: NetworkClient}
  ]
})
export class EndpointModule {
  constructor(
    private endpoint: EndpointService
  ) { }
}
