import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
 
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { MenuComponent } from "./components/menu/menu.component";
import { BocniMenuComponent } from "./components/bocni-menu/bocni-menu.component";
import { OurHederComponent } from "./components/our-heder/our-heder.component";
import { AboutComponent } from "./components/about/about.component";
import { NewsComponent } from "./components/news/news.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LinksComponent } from "./components/links/links.component";
import { PostsComponent } from "./components/posts/posts.component";

import { PostsService } from "./services/posts.service";
import { PostsModel } from "./services/posts.model";
import { UsersService } from "./services/users.service";
import { UsersModel } from "./services/users.model";
import { MenuModel } from "./services/menu.model";
import { SinglePostComponent } from "./components/single-post/single-post.component";
import { ReverseStr } from "./pipes/reverse-str.pipe";
import { TitleFilterPipe } from "./pipes/title-filter.pipe";
import { AddPostComponent } from './components/add-post/add-post.component';

import { PhotoModel } from './services/photo.model';
import { PhotoService } from './services/photo.service';
import { PhotogalleryComponent } from './components/photogallery/photogallery.component';

let appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aboutus", component: AboutComponent },
  { path: "news", component: NewsComponent },
  { path: "contact", component: ContactComponent },
  { path: "links", component: LinksComponent },
  { path: "posts", component: PostsComponent },
  { path: "posts/:id", component: SinglePostComponent },
  { path: "addpost", component: AddPostComponent},
  { path: "gallery", component: PhotogalleryComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    BocniMenuComponent,
    OurHederComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent,
    LinksComponent,
    PostsComponent,
    SinglePostComponent,
    ReverseStr,
    TitleFilterPipe,
    AddPostComponent,
    PhotogalleryComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PhotoService,PhotoModel,MenuModel, PostsModel, PostsService, UsersService, UsersModel],
  bootstrap: [AppComponent]
})
export class AppModule {}
