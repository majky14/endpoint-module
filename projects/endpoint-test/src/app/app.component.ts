import { Component, OnInit } from '@angular/core';
import { EndpointDecorator } from 'endpoint-module';
import { EndpointKey } from './config/endpoint.config';
import { User } from './domain/user';
import { UserEndpoint } from './endpoint/user.endpoint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @EndpointDecorator({endpoint: EndpointKey.USERS})
  public users: UserEndpoint;

  public ngOnInit(): void {
    this.users.list().subscribe(users => {
      console.log(users);
    });
    User.read('1').subscribe(user => {
      console.log(user);
    });
    this.users.profile().subscribe(user => {
      console.log(user);
    });
  }
}
