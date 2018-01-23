import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostsModel } from "../../services/posts.model";
@Component({
  selector: "single-post",
  templateUrl: "./single-post.component.html",
  styleUrls: ["./single-post.component.css"]
})
export class SinglePostComponent implements OnInit {
  id;
  post = {};
  createdDate = new Date();
  constructor(private route: ActivatedRoute, private postsModel: PostsModel) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.getPostFromModel();
    });
  }

  getPostFromModel() {
    this.postsModel.getPostById(this.id,(post)=>{
        this.post = post;
    });
  }
  
}
