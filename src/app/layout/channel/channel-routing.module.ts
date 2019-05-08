import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelComponent } from './channel.component';
import { ChannelVideosComponent } from './channel-videos/channel-videos.component';
import { VideoListComponent } from './video-list/video-list.component';
import { ChannelSearchComponent } from './channel-search/channel-search.component';

const routes: Routes = [
    {
        path: '', component: ChannelComponent,
        children: [
          { path: '', redirectTo: 'videos', pathMatch: 'prefix' },
          { path: 'videos', component: ChannelVideosComponent },
          { path: 'lists', component: VideoListComponent },
          { path: 'search/:search', component: ChannelSearchComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule { }