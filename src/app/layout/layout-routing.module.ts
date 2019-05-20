import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared';

// Variable en la cual se guardara el id del usuario que esta usando la app.
var x = 1;

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' }, // <-- Redireccion hacia la pagina home
            { path: 'home', loadChildren: './home/home.module#HomeModule' }, // <--- Muestra la pagina home
            { path: 'tendencies', loadChildren: './tendencies/tendencies.module#TendenciesModule'}, // <--- Muestra la pagina con las tendencias
            { path: 'channel', redirectTo: 'channel/'+x, pathMatch: 'prefix'/*, canActivate: [AuthGuard]*/}, // <-- Redireccion a account con el id del usuario
            { path: 'channel/:channelId', loadChildren: './channel/channel.module#ChannelModule'}, // <--- Muestra la cuenta con el id seleccionado
            { path: 'account', loadChildren: ''}, // <--- Muestra la cuenta del usuario
            { path: 'video/:id', loadChildren: './video/video.module#VideoModule'}, // <--- Muestra el video seleccionado
            { path: 'list/:id', loadChildren: '' }, // <-- Muestra la lista de videos seleccionada
            { path: 'upload', loadChildren: './upload/upload.module#UploadModule'/*, canActivate: [AuthGuard]*/}, // <-- Pagina para subir videos nuevos
            { path: 'settings', loadChildren: '', canActivate: [AuthGuard]}, // <-- Pagina para modificar los ajustes del usuario
            { path: 'search/:searchField', loadChildren: './search/search.module#SearchModule'} // <--- Pagina para mostrar las busquedas
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
