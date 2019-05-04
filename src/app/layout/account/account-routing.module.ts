import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { VideosComponent } from './videos/videos.component';
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [
    {
        path: '', component: AccountComponent,
        children: [
          { path: '', redirectTo: 'videos', pathMatch: 'prefix' },
          { path: 'videos', component: VideosComponent },
          { path: 'lists', component: VideoListComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }