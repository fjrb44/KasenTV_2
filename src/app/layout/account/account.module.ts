import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountComponent } from './account.component';
import { PageHeaderModule } from './../../shared';
import { AccountRoutingModule } from './account-routing.module';
import { VideosComponent } from './videos/videos.component';
import { VideoListComponent } from './video-list/video-list.component';

@NgModule({
    imports: [CommonModule, AccountRoutingModule, PageHeaderModule],
    declarations: [AccountComponent, VideosComponent, VideoListComponent]
})
export class AccountModule {}