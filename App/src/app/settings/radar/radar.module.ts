import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RadarComponent} from "./radar.component";
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [RadarComponent],
  exports: [RadarComponent]
})
export class RadarModule { }
