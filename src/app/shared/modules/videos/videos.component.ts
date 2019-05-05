import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../models/video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  @Input("videos") public videos: Video[];
  @Input("col") public col: string;

  constructor() { }

  ngOnInit() {
    if(!this.col){
      this.col = "col-12 col-md-4 col-lg-3 mt-3"
    }
  }

}
