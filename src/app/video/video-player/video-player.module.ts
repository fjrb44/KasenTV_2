import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VideoPlayerComponent } from './video-player.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [VideoPlayerComponent],
    exports: [VideoPlayerComponent]
})
export class VideoPlayerModule {}