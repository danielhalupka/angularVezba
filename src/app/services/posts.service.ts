import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class PostsService {
  constructor(private http: Http) {}

  getPosts(): any {
    return this.http
      .get("http://localhost:3000/posts")
      .map(res => res.json());
  }

  addPost(post):any{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:3000/posts",post,options)
    .map(res => res.json());
  }

  getPost(id): any {
    return this.http
      .get("http://localhost:3000/posts/" + id)
      .map(res => res.json());
  }

  deletePost(id):any{
    return this.http
    .delete("http://localhost:3000/posts/" + id)
    .map(res => res.json());
  }
};