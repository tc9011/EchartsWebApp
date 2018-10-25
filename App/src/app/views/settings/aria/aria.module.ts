import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AriaComponent} from './aria.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [AriaComponent],
  exports: [AriaComponent]
})
export class AriaModule { }
