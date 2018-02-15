import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AxisPointerComponent} from "./axis-pointer.component";
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [AxisPointerComponent],
  exports: [AxisPointerComponent]
})
export class AxisPointerModule { }
