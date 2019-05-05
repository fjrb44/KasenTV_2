import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/models/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videos: Video[];
  col: string;
  constructor() { }

  ngOnInit() {
    this.col = "col-12 mt-3";
    this.videos = [
      {
        "id":1,
        "name": "Video Test 1", 
      }, {
        "id":2,
        "name":"Video Test 2"
      }, {
        "id":3,
        "name":"Video Test 3"
      }, {
        "id":4,
        "name":"Video Test 4"
      }
    ];
  }

}
