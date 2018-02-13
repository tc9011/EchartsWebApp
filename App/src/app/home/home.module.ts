import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {homeRoutes} from "./home.routes";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
