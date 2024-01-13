import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, importProvidersFrom, ModuleWithProviders, NgModule } from '@angular/core';
import { NGX_NETWORK_CLIENT_TOKEN, NgxNetworkClientService } from '~/lib/network-client';
import { NGX_ENDPOINT_CONFIG_TOKEN, NgxEndpointConfig } from './endpoint.config';

import { NgxEndpointService } from './endpoint.service';

@NgModule()
export class NgxEndpointModule {
  public static forRoot(options: {
    config: NgxEndpointConfig,
  }): ModuleWithProviders<NgxEndpointModule> {
    const { config = [] } = options;

    return {
      ngModule: NgxEndpointModule,
      providers: [
        importProvidersFrom(HttpClientModule),
        { provide: NGX_NETWORK_CLIENT_TOKEN, useClass: NgxNetworkClientService },
        { provide: NGX_ENDPOINT_CONFIG_TOKEN, useValue: config },
        {
          provide: APP_INITIALIZER,
          multi: true,
          deps: [NgxEndpointService],
          useFactory: (service: NgxEndpointService) => {
            NgxEndpointService.instance = service;
          }
        }
      ]
    };
  }
}
