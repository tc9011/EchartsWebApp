import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LineComponent} from "./line/line.component";
import {BarComponent} from "./bar/bar.component";



const routes: Routes = [
    { path: '', redirectTo: '/line', pathMatch: 'full' },
    { path: 'line',  component: LineComponent },
    { path: 'bar', component: BarComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}