import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {XAxisComponent} from './x-axis.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [XAxisComponent],
  exports: [XAxisComponent]
})
export class XAxisModule { }
