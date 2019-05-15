import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TendenciesComponent } from './tendencies.component';
import { PageHeaderModule } from './../../shared';
import { TendenciesRoutingModule } from './tendencies-routing.module';
import { VideosModule } from 'src/app/video/videos/videos.module';

@NgModule({
    imports: [CommonModule, TendenciesRoutingModule, PageHeaderModule, VideosModule],
    declarations: [TendenciesComponent]
})
export class TendenciesModule {}