import { EndpointService } from '../endpoint';

import { EntityOptions } from './entity.h';

export const EntityDecorator = (endpoint: string) => (constructor) => {
  const endpointInstance = () => EndpointService.instance.create(endpoint);
  constructor.list = () => endpointInstance().list();
  constructor.create = (o: EntityOptions) => endpointInstance().create(o.body);
  constructor.read = (id: string) => endpointInstance().read(id);
  constructor.update = (id: string, o: EntityOptions) => endpointInstance().update(id, o.body);
  constructor.delete = (id: string) => endpointInstance().delete(id);
};
