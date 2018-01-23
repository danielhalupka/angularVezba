import { Component, OnInit } from "@angular/core";
import { PostsModel } from "../../services/posts.model";
import { Router } from "@angular/router";
import { UsersModel } from "../../services/users.model";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  constructor(
    private postsModel: PostsModel,
    private router: Router,
    private usersModel: UsersModel
  ) {}

  ngOnInit() {}

  goToPost(id) {
    this.router.navigate(["/posts", id]);
  }

  
}
