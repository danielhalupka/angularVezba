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

import { PostsService } from "./services/posts.service";
import { PostsModel } from "./services/posts.model";
import { MenuModel } from "./services/menu.model";

let appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aboutus", component: AboutComponent },
  { path: "news", component: NewsComponent },
  { path: "contact", component: ContactComponent },
  { path: "links", component: LinksComponent }
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
    LinksComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MenuModel, PostsModel, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
