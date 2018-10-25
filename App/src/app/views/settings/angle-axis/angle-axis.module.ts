import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngleAxisComponent} from './angle-axis.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [AngleAxisComponent],
  exports: [AngleAxisComponent]
})
export class AngleAxisModule { }
