import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent }         from './app.component';
import {LineComponent} from "./line/line.component";
import {BarComponent} from "./bar/bar.component";
import {LbOptionDataComponent} from "./lineandbaroptiondata/lb-option-data.component";
import {DataInputComponent} from "./datainput/datainput.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LineComponent,
        BarComponent,
        LbOptionDataComponent,
        DataInputComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
