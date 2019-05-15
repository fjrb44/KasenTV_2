import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../model/video';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input("video") video: Video;
  url: string;
  userId: number;
  name: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.url = "localhost"+this.router.url;
    this.userId = 1;
    this.name = "Username";
  }

}
