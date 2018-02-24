import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackgroundColorComponent} from './background-color.component';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [BackgroundColorComponent],
  exports: [BackgroundColorComponent]
})
export class BackgroundColorModule { }
