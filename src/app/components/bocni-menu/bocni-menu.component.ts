import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../../services/menu.model';
@Component({
  selector: 'bocni-menu',
  templateUrl: './bocni-menu.component.html',
  styleUrls: ['./bocni-menu.component.css']
})
export class BocniMenuComponent implements OnInit {

  constructor(private menuModel:MenuModel) { }

  ngOnInit() {
  }

}
