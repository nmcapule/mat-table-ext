import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { MatTableExtComponent } from './mat-table-ext.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
  ],
  declarations: [MatTableExtComponent],
  exports: [MatTableExtComponent],
})
export class MatTableExtModule { }
