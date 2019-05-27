import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search.component';
import { PageHeaderModule } from './../../shared';
import { SearchRoutingModule } from './search-routing.module';
import { VideosModule } from 'src/app/video/videos/videos.module';
import { ShowUserModule } from 'src/app/user/show-user/show-user.module';

@NgModule({
    imports: [CommonModule, SearchRoutingModule, PageHeaderModule, VideosModule, ShowUserModule],
    declarations: [SearchComponent]
})
export class SearchModule {}