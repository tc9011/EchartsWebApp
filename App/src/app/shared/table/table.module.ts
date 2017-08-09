import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdGridListModule} from '@angular/material';

import { TableComponent } from './table.component';
import {SharedModule} from "../shared.module";

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    SharedModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule { }
