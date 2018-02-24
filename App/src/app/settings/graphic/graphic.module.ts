import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GraphicComponent} from './graphic.component';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [GraphicComponent],
  exports: [GraphicComponent]
})
export class GraphicModule { }
