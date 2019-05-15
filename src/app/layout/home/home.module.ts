import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { PageHeaderModule } from './../../shared';
import { HomeRoutingModule } from './home-routing.module';
import { VideosModule } from 'src/app/video/videos/videos.module';

@NgModule({
    imports: [CommonModule, HomeRoutingModule, PageHeaderModule, VideosModule],
    declarations: [HomeComponent]
})
export class HomeModule {}