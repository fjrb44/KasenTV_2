import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../model/video';
import { OwnUserService } from 'src/app/shared/services/own-user.service';

@Component({
  selector: 'app-video-user',
  templateUrl: './video-user.component.html',
  styleUrls: ['./video-user.component.scss']
})
export class VideoUserComponent implements OnInit {
  @Input("video") public video: Video;
  userId: string;

  constructor(private ownUserService: OwnUserService) { }

  ngOnInit() {
    this.userId = this.ownUserService.getId();
  }

}
