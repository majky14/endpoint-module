import { IEndpointConfig } from 'endpoint-module';

import { UserEndpoint } from '../endpoint/user.endpoint';

export enum EndpointKey {
  USERS = 'users'
}

export const endpointConfig: IEndpointConfig = {
  baseUrl: 'https://api.mocki.io/v1/469a9425',
  endpoints: [
    {endpoint: EndpointKey.USERS, customEndpoint: UserEndpoint}
  ]
};
