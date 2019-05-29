import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../model/video';
import { OwnUserService } from 'src/app/shared/services/own-user.service';

@Component({
  selector: 'app-video-thumb-nail',
  templateUrl: './video-thumb-nail.component.html',
  styleUrls: ['./video-thumb-nail.component.scss']
})
export class VideoThumbNailComponent implements OnInit {
  @Input("video") public video: Video;
  userId: string;

  constructor(private ownUserService: OwnUserService) { }

  ngOnInit() {
    this.userId = this.ownUserService.getId();
  }

}
