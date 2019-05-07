import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadComponent } from './upload.component';
import { PageHeaderModule } from './../../shared';
import { UploadRoutingModule } from './upload-routing.module';
import { VideosModule } from 'src/app/shared/modules/videos/videos.module';

@NgModule({
    imports: [CommonModule, UploadRoutingModule, PageHeaderModule, VideosModule],
    declarations: [UploadComponent]
})
export class UploadModule {}