import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/models/video';

@Component({
  selector: 'app-channel-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class ChannelVideosComponent implements OnInit {
  videos: Video[];

  constructor() { }

  ngOnInit() {
    this.videos = [
      {
        "id": 11,
        "name": "Username Video 1",
      }, {
        "id": 12,
        "name": "Username Video 2"
      }, {
        "id": 13,
        "name": "Username Video 3"
      }, {
        "id": 14,
        "name": "Username Video 4"
      }, {
        "id": 15,
        "name": "Username Video 5"
      }, {
        "id": 16,
        "name": "Username Video 6"
      }, {
        "id": 17,
        "name": "Username Video 7"
      }, {
        "id": 18,
        "name": "Username Video 8"
      }
    ];
  }

}
