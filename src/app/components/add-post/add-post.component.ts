import { Component, OnInit } from '@angular/core';
import { UsersModel} from '../../services/users.model';
import { PostsModel } from '../../services/posts.model';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  title;
  body;
  userId = "";
  constructor(private usersModel:UsersModel, private postsModel:PostsModel) { }

  ngOnInit() {
  }

  addPostToPostsModel(){
    this.postsModel.addPost(
      {
        body: this.body,
        title: this.title,
        userId: this.userId
      }
    );
  }


}
