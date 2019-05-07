import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/models/video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos: Video[];

  constructor() { }

  ngOnInit() {
    this.videos = [
      {
        "id":1,
        "name": "Video Test 1",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id":2,
        "name":"Video Test 2",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id":3,
        "name":"Video Test 3",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id":4,
        "name":"Video Test 4",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id":5,
        "name":"Video Test 5",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id":6,
        "name":"Video Test 6",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id":7,
        "name":"Video Test 7",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }, {
        "id":8,
        "name":"Video Test 8",
        "url": "http://techslides.com/demos/sample-videos/small.mp4"
      }
    ];
  }

}
