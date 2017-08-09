import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../src/app/shared/table/table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule { }
