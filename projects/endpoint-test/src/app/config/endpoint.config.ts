import { IEndpointConfig } from 'endpoint-module';

import { USER_ENDPOINT_TOKEN } from '../endpoint/user.endpoint';

export enum EndpointKey {
  USERS = 'users'
}

export const endpointConfig: IEndpointConfig = {
  baseUrl: 'https://api.mocki.io/v1/469a9425',
  endpoints: [
    {endpointName: EndpointKey.USERS, endpointToken: USER_ENDPOINT_TOKEN}
  ]
};
