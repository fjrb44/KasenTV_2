import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogHeaderModule } from 'src/app/shared/component/log-header/log-header.module';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        LogHeaderModule
    ],
    declarations: [
        LoginComponent 
    ]
})
export class LoginModule {}
