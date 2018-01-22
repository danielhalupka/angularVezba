import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class PostsService {
  constructor(private http: Http) {}

  getPosts():any {
    return this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .map(res => res.json());
  }
}
