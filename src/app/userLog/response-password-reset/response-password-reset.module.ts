import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResponsePasswordResetComponent } from './response-password-reset.component';
import { ResponsePasswordResetRoutingModule } from './response-password-reset-routing.module';
import { LogHeaderModule } from 'src/app/shared/component/log-header/log-header.module';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
    imports: [
        CommonModule,
        ResponsePasswordResetRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        FormsModule,
        LogHeaderModule,
        SnotifyModule
    ],
    declarations: [
        ResponsePasswordResetComponent
    ],
    providers: [ {provide: 'SnotifyToastConfig', useValue: ToastDefaults }, SnotifyService]
})
export class ResponsePasswordResetModule {}
