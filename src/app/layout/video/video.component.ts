import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/models/video';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    
    console.log(this.id);
    
    this.col = "col-12 mt-3";
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
      }
    ];
    this.video = this.videos[3];
  }

}
