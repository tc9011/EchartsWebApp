import {Component, OnInit, ViewChild} from '@angular/core';
import {SettingsService} from "../shared/servers/settings.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.scss'],
  providers: [SettingsService]
})
export class LineChartsComponent implements OnInit{
  @ViewChild('deleteBtn') deleteBtn:any;
  dataGroup:Array<any>;
  echartsIntance:any;
  chartOption:any;
  settings:any;

  titleSizes:Array<number>;
  subtitleSizes:Array<number>;

  constructor(private settingsService: SettingsService, public translate: TranslateService) {
    this.dataGroup = [{
      title: '邮件营销',
      xData: '周一,周二,周三,周四,周五,周六,周日',
      yData: '120, 132, 101, 134, 90, 230, 210'
    }];
    this.settings = {
      'titleChecked': true,
      'title': '折线图',
      'subtitle': 'power by echarts',
      'titleColor': '',
      'subtitleColor': '',
      'titleFontSize': '',
      'subtitleFontSize': '',
      'itemGap': 10,
      'titleTop': 0,
      'titleLeft': 0
    };
    this.setChartOption();  //初始化echarts
  }

  ngOnInit() {
    this.deleteBtn.disabled = true;
    this.titleSizes = this.subtitleSizes = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
  }

  // 重新加载echarts
  reloadEcharts(){
    this.setChartOption();
    this.echartsIntance.setOption(this.chartOption,{
      notMerge: true
    });
  }

  setChartOption(){
    this.chartOption = this.settingsService.setChartOption(this.settings,this.dataGroup);
  }

  onChartInit(ec) {
    this.echartsIntance = ec;
  }

  // 增加一块输入区域
  addItem(){
    let _tempObject = {
      title: '',
      xData: this.dataGroup[0].xData,
      yData: ''
    };
    this.dataGroup.push(_tempObject);

    //有多个输入区块，删除按钮可用
    if (this.dataGroup.length > 1){
      this.deleteBtn.disabled = false;
    }
  }

  // 删除一块输入区域
  deleteItem(){
    //删除配置中相应的数据
    this.dataGroup.pop();

    this.reloadEcharts();

    //只剩一块输入区时，删除按钮不可用
    if (this.dataGroup.length === 1){
      this.deleteBtn.disabled = true;
    }
  }

  /*clearData(){
    this.dataGroup = [];
    this.reloadEcharts();
  }*/

}
