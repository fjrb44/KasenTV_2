import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogHeaderComponent } from './log-header.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [LogHeaderComponent],
    exports: [LogHeaderComponent]
})
export class LogHeaderModule {}