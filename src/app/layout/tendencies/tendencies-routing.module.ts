import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TendenciesComponent } from './tendencies.component';

const routes: Routes = [
    {
        path: '', component: TendenciesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TendenciesRoutingModule { }