import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/models/video';
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
  id: number

  constructor(
    private route: ActivatedRoute, 
    private videoService: VideoService, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));

    this.col = "col-12 mt-3";
    this.videos = this.videoService.getRecomendedVideos(this.id);
    this.video = this.videoService.getVideo(this.id);

    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this._router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }

}
