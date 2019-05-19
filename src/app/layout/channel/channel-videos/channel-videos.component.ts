import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/video/model/video';
import { VideoService } from 'src/app/shared/services/videoService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channel-videos',
  templateUrl: './channel-videos.component.html',
  styleUrls: ['./channel-videos.component.scss']
})
export class ChannelVideosComponent implements OnInit {
  videos: Video[];
  userId: number;

  constructor( 
    private videoService: VideoService,
    private route: Router
  ) { }

  ngOnInit() {
    let url = this.route.url;
    url = url.substring( url.indexOf('channel')+8, url.lastIndexOf('/') );
    
    this.userId = Number(url);

    // this.videos = this.videoService.getUserVideos(this.userId);
    this.videoService.getUserVideos(this.userId).subscribe( (data: Video[]) => (this.videos = data));
  }
}
