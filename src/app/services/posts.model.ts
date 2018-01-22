import { Injectable } from "@angular/core";
import { PostsService } from "./posts.service";

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
}
