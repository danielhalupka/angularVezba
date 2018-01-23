import { Component, OnInit } from '@angular/core';
import { PhotoModel } from '../../services/photo.model';

@Component({
  selector: 'photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css']
})
export class PhotogalleryComponent implements OnInit {

  constructor(private photosModel:PhotoModel) { }

  ngOnInit() {
  }

  

}
