import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { PageHeaderModule } from './../../shared';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [CommonModule, HomeRoutingModule, PageHeaderModule],
    declarations: [HomeComponent]
})
export class HomeModule {}