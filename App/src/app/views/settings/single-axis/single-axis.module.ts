import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SingleAxisComponent} from './single-axis.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [SingleAxisComponent],
  exports: [SingleAxisComponent]
})
export class SingleAxisModule { }
