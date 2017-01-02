import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LineComponent} from "./line/line.component";
import {BarComponent} from "./bar/bar.component";
import {LbOptionDataComponent} from "./lineandbaroptiondata/lb-option-data.component";
import {DataInputComponent} from "./datainput/datainput.component";


const routes: Routes = [
    {
        path: 'line',
        redirectTo: '/line/datainput',
        pathMatch: 'full'
    },
    {
        path: 'bar',
        redirectTo: '/bar/datainput',
        pathMatch: 'full'
    },
    {
        path: 'line',
        component: LineComponent,
        children: [{
            path: 'datainput',
            component: DataInputComponent,
        }, {
            path: 'lboption',
            component: LbOptionDataComponent,
        }]
    },
    {
        path: 'bar',
        component: BarComponent,
        children: [{
            path: 'datainput',
            component: DataInputComponent,
        }, {
            path: 'lboption',
            component: LbOptionDataComponent,
        }]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}