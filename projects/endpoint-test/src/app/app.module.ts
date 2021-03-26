import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EndpointConfigToken, EndpointModule } from 'endpoint-module';

import { AppComponent } from './app.component';
import { endpointConfig } from './config/endpoint.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EndpointModule
  ],
  providers: [
    {provide: EndpointConfigToken, useValue: endpointConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
