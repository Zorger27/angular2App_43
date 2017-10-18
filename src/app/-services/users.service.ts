import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  constructor(
    private http: Http
  ) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .toPromise()
  }

  getUser(id){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
      .toPromise()
  }

}