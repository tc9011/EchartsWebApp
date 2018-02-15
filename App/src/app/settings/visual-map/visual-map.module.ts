import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VisualMapComponent} from "./visual-map.component";
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [VisualMapComponent],
  exports: [VisualMapComponent]
})
export class VisualMapModule { }
