import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoComponent } from './video.component';
import { PageHeaderModule } from './../../shared';
import { VideoRoutingModule } from './video-routing.module';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoCommentsComponent } from './video-comments/video-comments.component';
import { VideosModule } from 'src/app/shared/modules/videos/videos.module';
import { VideoFormCommentComponent } from './video-form-comment/video-form-comment.component';

@NgModule({
    imports: [CommonModule, VideoRoutingModule, PageHeaderModule, VideosModule],
    declarations: [VideoComponent, VideoPlayerComponent, VideoCommentsComponent, VideoFormCommentComponent]
})
export class VideoModule {}