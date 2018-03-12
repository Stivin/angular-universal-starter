import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { TransferBackRoutes } from './transfer-back.routing';
import { TransferBackComponent } from './transfer-back.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TransferBackRoutes
  ],
  declarations: [TransferBackComponent]
})
export class TransferBackModule { }
