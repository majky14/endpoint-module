import { EndpointService } from '../endpoint/endpoint.service';

import { EntityDecoratorOptions, EntityOptions } from './entity.h';

export const EntityDecorator = (options: EntityDecoratorOptions) => {
  return (constructor) => {
    const endpoint = () => EndpointService.instance.create({
      endpoint: options.endpoint
    });
    constructor.list = () => endpoint().list();
    constructor.create = (o: EntityOptions) => endpoint().create(o.body);
    constructor.read = (id: string) => endpoint().read(id);
    constructor.update = (id: string, o: EntityOptions) => endpoint().update(id, o.body);
    constructor.delete = (id: string) => endpoint().delete(id);
  };
};
