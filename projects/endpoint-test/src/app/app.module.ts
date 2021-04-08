import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ENDPOINT_CONFIG_TOKEN, EndpointModule } from 'endpoint-module';

import { AppComponent } from './app.component';
import { endpointConfig } from './config/endpoint.config';
import { USER_ENDPOINT_TOKEN, UserEndpoint } from './endpoint/user.endpoint';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EndpointModule
  ],
  providers: [
    {provide: ENDPOINT_CONFIG_TOKEN, useValue: endpointConfig},
    {provide: USER_ENDPOINT_TOKEN, useClass: UserEndpoint}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
