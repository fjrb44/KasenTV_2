import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OwnUserService {

  constructor(private route: Router) { }

  getId(): string{
    let userId = this.getUrlData();

    if(userId != "noLogged"){
      return userId;
    }
    return "noLogged";
  }

  isLogged(): boolean{
    let userId = this.getUrlData();
    return userId != "noLogged";
  }

  private getUrlData(): string{
    let userId = this.route.url;
    userId = userId.substring( userId.indexOf('user/')+5, userId.length);

    let position: number = userId.indexOf("/");

    if(position != -1){
      userId = userId.substring( 0, position);
    }

    return userId;
  }

  getActualVideo(): number{
    let videoId: number;

    let videoUrl = this.route.url;
    videoUrl = videoUrl.substring( videoUrl.indexOf('video/')+6, videoUrl.length);

    videoId = Number(videoUrl);

    if(isNaN(videoId)){
      return 0;
    }

    return videoId;
  }
}
