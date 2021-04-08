# EndpointModule

Angular version: 11.2.7

This library provides simplicity for using endpoints.

## Basic usage

Import `EndpointModule` in your `AppModule` and setup config in providers.

    providers: [
        {provide: EndpointConfigToken, useValue: {baseUrl: 'https://api.mocki.io/v1/469a9425'}}
    ]

Now you can decorate some property with `@EndpointDecorator` and create an endpoint.

    export class AppComponent implements OnInit {
      @EndpointDecorator('users')
      public users: Endpoint;
    }

If you now call `this.users.list().subscribe()` within `AppComponent` you will perform GET request to `https://api.mocki.io/v1/469a9425/users`.

We can also create an endpoint by `@EntityDecorator`. Simply create class which represent entity, extend the class with `Entity` and decorate with `@EntityDecorator`.

    @EntityDecorator('users')
    export class User extends Entity {
      name: string;
      roles?: {
        [key: string]: boolean;
      };
    } 

Now you can call `User.list().subscribe()` and you will see the same request as above.

Next, we can create an endpoint in a config. This approach allow us to create custom endpoint methods.
For example, we want a request to `/users/profile` we can create custom endpoint class and define such method.

    export class UserEndpoint extends Endpoint<User> {
      public profile(): Observable<User> {
        return this.http.get(`${this.endpoint}/profile`) as Observable<User>;
      }
    }
    
For this we have to include this endpoint in a config

    providers: [
        {
            provide: EndpointConfigToken,
            useValue: {
                baseUrl: 'https://api.mocki.io/v1/469a9425',
                endpoints: [
                    {endpointName: 'users', endpoint: UserEndpoint}
                ]
            }
        }
    ] 

Now we can retype endpoint class in `AppComponent` to new created `UserEndpoint` and call custom method.

    export class AppComponent implements OnInit {
      @EndpointDecorator('users')
      public users: UserEndpoint;
    }
    
If you now call `this.users.profile().subscribe()` within `AppComponent` you will perform GET request to `https://api.mocki.io/v1/469a9425/users/profile`.

### Base endpoint methods

| Method | Arguments | Api method | Returns |
| --- | --- | --- | --- |
| list | none | GET | Observable\<T[]> |
| create | body: Partial\<T> | POST | Observable\<T> |
| update | id: string, body: Partial\<T> | PATCH | Observable\<T> |
| read | id: string | GET | Observable\<T> |
| delete | id: string | DELETE | Observable\<T> |
