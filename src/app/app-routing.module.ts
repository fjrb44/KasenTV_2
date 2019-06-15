import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
    // { path: '', redirectTo:'user/noLogged', pathMatch: 'prefix' },
    { path: '', loadChildren: './layout/layout.module#LayoutModule'/*, canActivate: [AuthGuard] */},
    { path: 'login', loadChildren: './userLog/login/login.module#LoginModule'},
    { path: 'signup', loadChildren: './userLog/signup/signup.module#SignUpModule'},
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
