import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParallelAxisComponent} from './parallel-axis.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [ParallelAxisComponent],
  exports: [ParallelAxisComponent]
})
export class ParallelAxisModule { }
