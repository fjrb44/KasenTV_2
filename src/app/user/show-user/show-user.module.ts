import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShowUserComponent } from './show-user.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [ShowUserComponent ],
    exports: [ShowUserComponent]
})
export class ShowUserModule {}