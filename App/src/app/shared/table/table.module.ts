import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';
import {SharedModule} from "../shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule { }
