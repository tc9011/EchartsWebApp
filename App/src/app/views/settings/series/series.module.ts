import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SeriesComponent} from './series.component';
import {SharedModule} from '../../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [SeriesComponent],
  exports: [SeriesComponent]
})
export class SeriesModule { }
