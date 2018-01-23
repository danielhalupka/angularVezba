import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class PhotoService {

  constructor(private http: Http) { }

  getPhotos(): any {
    return this.http
      .get("https://jsonplaceholder.typicode.com/albums")
      .map(res => res.json());
  }

}
