import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadComponent } from './upload.component';
import { PageHeaderModule } from './../../shared';
import { UploadRoutingModule } from './upload-routing.module';
import { VideosModule } from 'src/app/video/videos/videos.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, UploadRoutingModule, PageHeaderModule, VideosModule, ReactiveFormsModule, FormsModule],
    declarations: [UploadComponent]
})
export class UploadModule {}