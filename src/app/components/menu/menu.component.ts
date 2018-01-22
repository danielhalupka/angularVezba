import { Component, OnInit } from "@angular/core";
import { MenuModel } from '../../services/menu.model';

@Component({
  selector: "our-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  constructor(private menuModel:MenuModel) {
  }

  ngOnInit() {}
}
