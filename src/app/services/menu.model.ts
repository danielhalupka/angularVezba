import { Injectable } from '@angular/core';

@Injectable()
export class MenuModel {
  menuLinks = [
    {
      label: "Home",
      path: "",
      class:"home"
    },
    {
      label: "Posts",
      path: "posts"
    },
    {
      label: "About Us",
      path: "aboutus"
    },

    {
      label: "News",
      path: "news"
    },

    {
      label: "Contact",
      path: "contact"
    },

    {
      label: "Links",
      path: "links"
    },
    {
      label: "Add post",
      path: "addpost",
      class: "home"
    }
  ];

  removeLink(){
    this.menuLinks.splice(2,1);
  }
  constructor() { }

}
