import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Video } from 'src/app/video/model/video';
import { VideoService } from 'src/app/shared/services/videoService';

@Component({
  selector: 'app-tendencies',
  templateUrl: './tendencies.component.html',
  styleUrls: ['./tendencies.component.scss'],
  animations: [routerTransition()]
})
export class TendenciesComponent implements OnInit {
  videos: Video[];

  constructor( private videoService: VideoService) { }

  ngOnInit() {
    this.videos = this.videoService.getTendencies();
  }
}