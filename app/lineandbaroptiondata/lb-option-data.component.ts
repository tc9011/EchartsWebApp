import {Component, Input} from "@angular/core";
import {MyEcharts} from "../my-echarts";
import {MyEchartsService} from "../my-echarts.service";
@Component({
    moduleId: module.id,
    selector: 'lb-option-data',
    templateUrl: 'lb-option-data.component.html',
    styleUrls: ['lb-option-data.component.css']
})

export class LbOptionDataComponent{
    myecharts: MyEcharts;
    constructor(private myechartsService: MyEchartsService){

    }
}