import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class OwnUserService {

  constructor(private route: Router, private tokenService: TokenService) { }

  getId(): number{
    if(this.tokenService.isValid()){
      return Number(this.tokenService.getId());
    }
    return 0;
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
