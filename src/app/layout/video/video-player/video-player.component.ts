import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  url: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.url = "localhost"+this.router.url;
  }

}
