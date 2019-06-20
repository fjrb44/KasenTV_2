import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared';
import { AfterLoginService } from '../shared/services/after-login.service';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', redirectTo:'', pathMatch: 'prefix' }, // <-- Redireccion hacia la pagina home
            { path: 'tendencies', loadChildren: './tendencies/tendencies.module#TendenciesModule'}, // <--- Muestra la pagina con las tendencias
            { path: 'channel/:channelId', loadChildren: './channel/channel.module#ChannelModule'}, // <--- Muestra la cuenta con el id seleccionado
            { path: 'account', loadChildren: './account/account.module#AccountModule', canActivate: [AfterLoginService]}, // <--- Página para modificar los ajustes del usuario
            { path: 'video/:id', loadChildren: './video/video.module#VideoModule'}, // <--- Muestra el video seleccionado
            { path: 'video/:id/edit', loadChildren: './video-edit/video-edit.module#VideoEditModule', canActivate: [AfterLoginService]}, // <--- Edicion del video
            { path: 'upload', loadChildren: './upload/upload.module#UploadModule', canActivate: [AfterLoginService]}, // <-- Pagina para subir videos nuevos
            { path: 'search/:searchField', loadChildren: './search/search.module#SearchModule'}, // <--- Pagina para mostrar las busquedas
            { path: 'category/:categoryId', loadChildren: './category/category.module#CategoryModule'}, // <--- Página para mostrar los videos de la categoria indicada
            { path: '', loadChildren: './home/home.module#HomeModule' } // <--- Muestra la pagina home
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
