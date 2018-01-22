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
    }
  ];

  removeLink(){
    this.menuLinks.splice(2,1);
  }
  constructor() { }

}
