import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';
import { BeforeLoginService } from './shared/services/before-login.service';

const routes: Routes = [
    // { path: '', redirectTo:'user/noLogged', pathMatch: 'prefix' },
    { path: '', loadChildren: './layout/layout.module#LayoutModule'/*, canActivate: [AuthGuard] */},
    { path: 'login', loadChildren: './userLog/login/login.module#LoginModule', canActivate: [BeforeLoginService]},
    { path: 'signup', loadChildren: './userLog/signup/signup.module#SignUpModule', canActivate: [BeforeLoginService]},
    { path: 'password-reset', loadChildren: './userLog/password-reset/password-reset.module#PasswordResetModule', canActivate: [BeforeLoginService]},
    { path: 'response-password-reset', loadChildren: './userLog/response-password-reset/response-password-reset.module#ResponsePasswordResetModule', canActivate: [BeforeLoginService]},
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
