import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VideosComponent } from './videos.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [VideosComponent],
    exports: [VideosComponent]
})
export class VideosModule {}