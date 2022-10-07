import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { UserPhoto } from '../interfaces/user-photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photos: UserPhoto[]; 

  constructor() {
    this.photos = [];
   }

  async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });

  }
  
}
