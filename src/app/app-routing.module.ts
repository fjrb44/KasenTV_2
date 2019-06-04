import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
    { path: '', redirectTo:'user/noLogged', pathMatch: 'prefix' },
    { path: 'user/:userId', loadChildren: './layout/layout.module#LayoutModule'/*, canActivate: [AuthGuard] */},
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'user/noLogged' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
