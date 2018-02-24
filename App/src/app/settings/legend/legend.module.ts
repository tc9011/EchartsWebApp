import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LegendComponent} from './legend.component';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [LegendComponent],
  exports: [LegendComponent]
})
export class LegendModule { }
