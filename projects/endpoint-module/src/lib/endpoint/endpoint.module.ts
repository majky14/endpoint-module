import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EndpointService } from './endpoint.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [EndpointService]
})
export class EndpointModule {
  constructor(private endpoint: EndpointService) { }
}
