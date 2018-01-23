import { Injectable } from "@angular/core";
import { PostsService } from "./posts.service";
import * as q from 'q';

@Injectable()
export class PostsModel {
  posts = [];
  constructor(private postsService: PostsService) {
    this.initializePosts();
  }

  initializePosts() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  getPostById(id,callback){
    for(let i = 0; i < this.posts.length;i++){
      if(this.posts[i].id == id){
        callback(this.posts[i]);
      }
    }
    this.postsService.getPost(id).subscribe(post=>{
      callback(post);
    });
  }
}
