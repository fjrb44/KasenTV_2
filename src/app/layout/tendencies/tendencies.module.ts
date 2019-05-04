import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TendenciesComponent } from './tendencies.component';
import { PageHeaderModule } from './../../shared';
import { TendenciesRoutingModule } from './tendencies-routing.module';

@NgModule({
    imports: [CommonModule, TendenciesRoutingModule, PageHeaderModule],
    declarations: [TendenciesComponent]
})
export class TendenciesModule {}

/*

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule],
    declarations: [TablesComponent]
})
export class TablesModule {}

*/