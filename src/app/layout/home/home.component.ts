import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/video/model/video';
import { VideoService } from 'src/app/shared/services/videoService';
import { OwnUserService } from 'src/app/shared/services/own-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos: Video[];
  userId: string;
  constructor(private videoService: VideoService, private ownUserService: OwnUserService) { }

  ngOnInit() {
    this.userId = "0";
    
    if(this.ownUserService.isLogged()){
      this.userId = this.ownUserService.getId();
    }
    //this.videos = this.videoService.getHomeVideos();
    this.videoService.getHomeVideos(Number(this.userId)).subscribe( (data: Video[]) => ( this.videos = data ) );    
  }

}
