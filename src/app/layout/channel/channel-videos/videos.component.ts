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
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id": 12,
        "name": "Username Video 2",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id": 13,
        "name": "Username Video 3",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id": 14,
        "name": "Username Video 4",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id": 15,
        "name": "Username Video 5",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id": 16,
        "name": "Username Video 6",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id": 17,
        "name": "Username Video 7",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id": 18,
        "name": "Username Video 8",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }
    ];
  }
}
