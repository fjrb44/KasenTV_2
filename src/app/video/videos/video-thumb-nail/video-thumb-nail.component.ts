import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../model/video';

@Component({
  selector: 'app-video-thumb-nail',
  templateUrl: './video-thumb-nail.component.html',
  styleUrls: ['./video-thumb-nail.component.scss']
})
export class VideoThumbNailComponent implements OnInit {
  @Input("video") public video: Video;
  private publicUrl: string;
  
  constructor() { }

  ngOnInit() {
    this.publicUrl = "http://localhost:8000/storage/";
  }

}
