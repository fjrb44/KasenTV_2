import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search.component';
import { PageHeaderModule } from './../../shared';
import { SearchRoutingModule } from './search-routing.module';
import { VideosModule } from 'src/app/video/videos/videos.module';

@NgModule({
    imports: [CommonModule, SearchRoutingModule, PageHeaderModule, VideosModule],
    declarations: [SearchComponent]
})
export class SearchModule {}