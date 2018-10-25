import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YAxisComponent} from './y-axis.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [YAxisComponent],
  exports: [YAxisComponent]
})
export class YAxisModule { }
