import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeoComponent} from './geo.component';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [GeoComponent],
  exports: [GeoComponent]
})
export class GeoModule { }
