import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SuscribeButtonComponent } from './suscribe-button.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [SuscribeButtonComponent],
    exports: [SuscribeButtonComponent]
})
export class SuscribeButtonModule {}