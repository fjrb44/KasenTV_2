import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VideosComponent } from './videos.component';
import { VideoThumbNailComponent } from './video-thumb-nail/video-thumb-nail.component';
import { VideoUserComponent } from './video-user/video-user.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [VideosComponent, VideoThumbNailComponent, VideoUserComponent],
    exports: [VideosComponent]
})
export class VideosModule {}