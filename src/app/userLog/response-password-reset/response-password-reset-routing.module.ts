import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsePasswordResetComponent } from './response-password-reset.component';

const routes: Routes = [
    {
        path: '',
        component: ResponsePasswordResetComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResponsePasswordResetRoutingModule {}
