import { Injectable } from "@angular/core";
import { PhotoService } from "./photo.service";

@Injectable()
export class PhotoModel {
  photos = [];
  constructor(private photoService: PhotoService) {
    this.initializePhotos();
  }

  initializePhotos() {
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }
}
