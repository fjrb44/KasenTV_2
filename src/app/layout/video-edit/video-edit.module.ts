import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from './../../shared';
import { VideosModule } from 'src/app/video/videos/videos.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderModule } from 'src/app/shared/component/loader/loader.module';
import { ShowUserModule } from 'src/app/user/show-user/show-user.module';
import { SuscribeButtonModule } from 'src/app/shared/component/suscribe-button/suscribe-button.module';
import { SnotifyService, ToastDefaults, SnotifyModule } from 'ng-snotify';
import { VideoEditRoutingModule } from './video-edit-routing.module';
import { VideoEditComponent } from './video-edit.component';

@NgModule({
    imports: [
        CommonModule, 
        VideoEditRoutingModule, 
        PageHeaderModule, 
        VideosModule, 
        ReactiveFormsModule, 
        LoaderModule, 
        ShowUserModule, 
        SuscribeButtonModule,
        SnotifyModule,
        FormsModule,
        LoaderModule
    ],
    declarations: [
        VideoEditComponent
    ],
    providers: [
        {
            provide: 'SnotifyToastConfig', 
            useValue: ToastDefaults 
        }, 
        SnotifyService
    ]
})
export class VideoEditModule {}