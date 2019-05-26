import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../model/video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  @Input("videos") public videos: Video[];
  // @Input("col") public col: string;
  @Input("oneColumn") public oneColumn: boolean;
  @Input("hideUser") public hideUser: boolean;

  constructor() { }

  ngOnInit() {
    if(!this.oneColumn){
      this.oneColumn = false;
    }

    if(!this.hideUser){
      this.hideUser = false;
    }

  }

  isVideosEmpty(): boolean{
    return (this.videos.length == 0) ? true: false;
  }
}
