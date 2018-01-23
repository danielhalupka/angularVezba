import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class UsersService {

  constructor(private http: Http) {}

  getUsers(): any {
    return this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .map(res => res.json());
  }

}
