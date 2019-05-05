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
      }, {
        "id":2,
        "name":"Video Test 2"
      }, {
        "id":3,
        "name":"Video Test 3"
      }, {
        "id":4,
        "name":"Video Test 4"
      }, {
        "id":5,
        "name":"Video Test 5"
      }, {
        "id":6,
        "name":"Video Test 6"
      }, {
        "id":7,
        "name":"Video Test 7"
      }, {
        "id":8,
        "name":"Video Test 8"
      }
    ];
  }

}
