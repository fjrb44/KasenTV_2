import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoComponent } from './video.component';
import { PageHeaderModule } from './../../shared';
import { VideoRoutingModule } from './video-routing.module';
// import { VideoPlayerComponent } from '../../video/video-player/video-player.component';
import { VideoCommentsComponent } from './video-comments/video-comments.component';
import { VideosModule } from 'src/app/video/videos/videos.module';
import { VideoPlayerModule } from 'src/app/video/video-player/video-player.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnotifyService, ToastDefaults, SnotifyModule } from 'ng-snotify';

@NgModule({
    imports: [
      CommonModule,
      VideoRoutingModule,
      PageHeaderModule,
      VideosModule,
      VideoPlayerModule,
      FormsModule,
      ReactiveFormsModule,
      SnotifyModule
    ],
    declarations: [VideoComponent, VideoCommentsComponent],
    providers: [ {provide: 'SnotifyToastConfig', useValue: ToastDefaults }, SnotifyService]
})
export class VideoModule {}
