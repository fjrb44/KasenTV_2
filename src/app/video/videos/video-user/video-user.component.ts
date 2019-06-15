import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../model/video';

@Component({
  selector: 'app-video-user',
  templateUrl: './video-user.component.html',
  styleUrls: ['./video-user.component.scss']
})
export class VideoUserComponent implements OnInit {
  @Input("video") public video: Video;

  constructor() { }

  ngOnInit() {}

}
