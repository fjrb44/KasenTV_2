import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../model/video';
import { OwnUserService } from 'src/app/shared/services/own-user.service';

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

  constructor(
    private router: Router, 
    private ownUserService: OwnUserService
  ) { }

  ngOnInit() {
    this.url = "localhost"+this.router.url;
    this.userId = this.ownUserService.getId();
    this.name = "Username";
  }

}
