import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
    //make file
  useLocation?:[number,number];
  get isUseLocationReady():boolean{
    return !!this.useLocation;
  }
  constructor() { 
    this.getUserLocation();
  }
  async getUserLocation(){
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(
        ({coords})=>{
          this.useLocation = [coords.longitude,coords.latitude];
          resolve(this.useLocation);
        },
        (err)=>{
          console.error(err);
          alert("No se pudo obtener la localización");
          reject();

        }
      );
    })
  }

}
