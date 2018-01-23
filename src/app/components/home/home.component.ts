import { Component, OnInit } from '@angular/core';
import { PostsModel } from '../../services/posts.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postsModel:PostsModel) { }

  ngOnInit() {}

}
