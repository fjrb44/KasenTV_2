import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/video/model/video';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/shared/services/videoService';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videos: Video[];
  video: Video;
  col: string;
  videoId: number;
  userId: number;

  constructor(
    private route: ActivatedRoute, 
    private videoService: VideoService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.videoId = Number(this.route.snapshot.paramMap.get("id"));
    this.userId = 1;

    this.col = "col-12 mt-3";

    this.videoService.getRecomendedVideos(this.videoId, this.userId).subscribe( (data: Video[]) =>{
      this.videos = data;
    });

    this.videoService.getVideo(this.videoId)
      .subscribe( (selectedVideo: Video) => (this.video = selectedVideo));

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }

}
