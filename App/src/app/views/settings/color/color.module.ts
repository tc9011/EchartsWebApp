import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorComponent} from './color.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [ColorComponent],
  exports: [ColorComponent]
})
export class ColorModule { }
