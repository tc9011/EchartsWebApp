import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataZoomComponent} from './data-zoom.component';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [DataZoomComponent],
  exports: [DataZoomComponent]
})
export class DataZoomModule { }
