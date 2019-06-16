import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LogHeaderModule } from 'src/app/shared/component/log-header/log-header.module';

@NgModule({
    imports: [
        CommonModule,
        SignupRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        HttpClientModule,
        FormsModule,
        LogHeaderModule
    ],
    declarations: [
        SignupComponent 
    ]
})
export class SignUpModule {}
