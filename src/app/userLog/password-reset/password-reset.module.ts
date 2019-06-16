import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PasswordResetComponent } from './password-reset.component';
import { PasswordResetRoutingModule } from './password-reset-routing.module';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { LogHeaderModule } from 'src/app/shared/component/log-header/log-header.module';

@NgModule({
    imports: [
        CommonModule,
        PasswordResetRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        FormsModule,
        SnotifyModule,
        LogHeaderModule
    ],
    declarations: [
        PasswordResetComponent
    ],
    providers: [ {provide: 'SnotifyToastConfig', useValue: ToastDefaults }, SnotifyService],
})
export class PasswordResetModule {}
