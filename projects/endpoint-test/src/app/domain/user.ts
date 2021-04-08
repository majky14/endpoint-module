import { Entity, EntityDecorator } from 'endpoint-module';

import { EndpointKey } from '../config/endpoint.config';

@EntityDecorator(EndpointKey.USERS)
export class User extends Entity {
  name: string;
  roles?: {
    [key: string]: boolean;
  };
}
