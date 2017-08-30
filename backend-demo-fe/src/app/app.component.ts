import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users: User[];

  constructor(private api: ApiService) {}

  getUsers() {
    this.api.getUsers().then((res) => {
      this.users = res;
    });
  }

  getRules() {
    this.api.getRules();
  }
}
