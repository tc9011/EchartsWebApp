import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  @ViewChild('deleteBtn') deleteBtn: any;
  dataGroup: Array<any>;

  constructor() {
    this.dataGroup = [{
      title: '邮件营销',
      xData: '周一,周二,周三,周四,周五,周六,周日',
      yData: '120, 132, 101, 134, 90, 230, 210'
    }];
  }

  ngOnInit() {
    this.deleteBtn.disabled = true;
  }

  // 增加一块输入区域
  addItem() {
    const _tempObject = {
      title: '',
      xData: this.dataGroup[0].xData,
      yData: ''
    };
    this.dataGroup.push(_tempObject);

    // 有多个输入区块，删除按钮可用
    if (this.dataGroup.length > 1) {
      this.deleteBtn.disabled = false;
    }
  }

  // 删除一块输入区域
  deleteItem() {
    // 删除配置中相应的数据
    this.dataGroup.pop();

    // this.reloadEcharts();

    // 只剩一块输入区时，删除按钮不可用
    if (this.dataGroup.length === 1) {
      this.deleteBtn.disabled = true;
    }
  }
}
