import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from './category.component';
import { PageHeaderModule } from './../../shared';
import { CategoryRoutingModule } from './category-routing.module';
import { VideosModule } from 'src/app/video/videos/videos.module';

@NgModule({
    imports: [CommonModule, CategoryRoutingModule, PageHeaderModule, VideosModule],
    declarations: [CategoryComponent]
})
export class CategoryModule {}