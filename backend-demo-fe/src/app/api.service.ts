import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public getUsers() {
    return this.http.get('/api/resource/user')
                    .toPromise()
                    .then((response) => {
                      return response.json() as User[];
                    });
  }

  public getRules() {
    return this.http.get('/api/rules')
      .toPromise()
      .then(response => response.json());
  }

  public saveUser(data) {
    return this.http.post('/api/resource/user', data)
      .toPromise()
      .then(response => response.json() as User);
  }

}
