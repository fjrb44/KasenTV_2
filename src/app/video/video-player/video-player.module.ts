import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VideoPlayerComponent } from './video-player.component';
import { SuscribeButtonModule } from 'src/app/shared/component/suscribe-button/suscribe-button.module';

@NgModule({
    imports: [CommonModule, RouterModule, SuscribeButtonModule],
    declarations: [VideoPlayerComponent],
    exports: [VideoPlayerComponent]
})
export class VideoPlayerModule {}