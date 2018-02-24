import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GridComponent} from './grid.component';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [GridComponent],
  exports: [GridComponent]
})
export class GridModule { }
