import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelComponent } from './channel.component';
import { PageHeaderModule } from './../../shared';
import { ChannelRoutingModule } from './channel-routing.module';
import { ChannelVideosComponent } from './channel-videos/channel-videos.component';
import { VideoListComponent } from './video-list/video-list.component';
import { ChannelSearchComponent } from './channel-search/channel-search.component';
import { VideosModule } from 'src/app/video/videos/videos.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from 'src/app/shared/component/loader/loader.module';

@NgModule({
    imports: [CommonModule, ChannelRoutingModule, PageHeaderModule, VideosModule, ReactiveFormsModule, LoaderModule],
    declarations: [ChannelComponent, ChannelVideosComponent, VideoListComponent, ChannelSearchComponent]
})
export class ChannelModule {}