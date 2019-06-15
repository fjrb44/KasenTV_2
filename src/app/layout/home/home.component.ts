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
  userId: number;
  
  constructor(
    private videoService: VideoService, 
    private ownUserService: OwnUserService
  ) { }

  ngOnInit() {
    this.userId = this.ownUserService.getId();
    
    this.videoService.getHomeVideos(this.userId).subscribe( (data: Video[]) => ( this.videos = data ) );    
  }

}
