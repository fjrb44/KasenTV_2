import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/video/model/video';
import { VideoService } from 'src/app/shared/services/videoService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos: Video[];

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videos = this.videoService.getHomeVideos();
  }

}
