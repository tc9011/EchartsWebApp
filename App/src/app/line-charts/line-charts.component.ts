import { Component, OnInit, ViewChild } from '@angular/core';
import {SettingsService} from "../shared/servers/settings.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.scss'],
  providers: [SettingsService]
})
export class LineChartsComponent implements OnInit {
  @ViewChild('deleteBtn') deleteBtn:any;
  numberOfDataGroup:Array<number>;
  echartsIntance:any;
  chartOption:any;

  settings:any;


  constructor(private settingsService: SettingsService, public translate: TranslateService) {
    this.chartOption = this.settingsService.exampleSettings;
    this.numberOfDataGroup = [1];
    this.settings = {
      'title': '',
      'subtitle': '',
      'titleColor': '',
      'subtitleColor': '',
      'xData': '',
      'yData': ''
    }
  }

  ngOnInit() {
    this.deleteBtn.disabled = true;
  }

  reloadEcharts(){
    this.chartOption = this.settingsService.setChartOption(this.settings);
    this.echartsIntance.setOption(this.chartOption);
  }

  onChartInit(ec) {
    this.echartsIntance = ec;
  }

  addItem(){
    this.numberOfDataGroup.push(this.numberOfDataGroup[this.numberOfDataGroup.length - 1] + 1);
    if (this.numberOfDataGroup.length > 1){
      this.deleteBtn.disabled = false;
    }
  }

  deleteItem(){
    this.numberOfDataGroup.pop();
    if (this.numberOfDataGroup.length === 1){
      this.deleteBtn.disabled = true;
    }
  }

}
