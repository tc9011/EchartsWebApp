import {Component, OnChanges, AfterViewInit, Input, Output} from "@angular/core";
@Component({
    moduleId: module.id,
    selector: 'my-line',
    templateUrl: 'line.component.html',
    styleUrls: ['line.component.css']
})
export class LineComponent implements OnChanges,AfterViewInit{
    option:any = {
        title: {
            text: 'ECharts 入门示例',
            textStyle: {
                color: '#333',
                fontStyle: 'normal',
                fontWeight: 'border',
                fontSize: 20,
            },
            left: 'center',
            top: '5%'
        },
        tooltip: {
            show: true,
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                // dataView: {show: true, readOnly: true},
                // magicType: {show: true, type: ['bar']},
                dataZoom: {show: true},
                restore: {show: true},
                saveAsImage: {show: true}
            },
            right: 30,
            top: 15
        },
        dataZoom: [{
          type: 'slider',
          start: 0,
          end: 100
        }],
        legend: {
            selectedMode: true,
            selected: {},
            right: 0,
            top: 150,
            orient: 'vertical',
            textStyle: {
                fontSize: 12,
            },
            show: true,
            data: ['销量','售22222222价']
        },
        grid: {
            show: false,
            top: 150,
            right: 200,

        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
            axisLabel: {
                interval: 0,
            }
        },
        yAxis: [
            {
                type: 'value',
                name: '',
            }
        ],
        series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 2000000]
        },{
            name: '售22222222价',
            type: 'line',
            data: [500, 2099, 3699, 1099, 1990, 2000000]
        }]
    };

    createCharts() {
        let that = this;
        let dom:any = document.getElementById("myline");
        // let width = dom.clientWidth;
        // let height = dom.clientHeight;
        //this.changeOptionPosition(width, height);
        let myChart:any = echarts.init(dom, 'macarons');
        myChart.setOption(that.option);
    }


    ngOnInit():void{
        let that = this;
        that.createCharts();

    }


    ngAfterViewInit() {
        let that = this;
        that.option.title.text = that.myecharts.title;
        // var dataflag = that.dataflag;
        that.lineData = that.data;      //data赋值给linedata

        //清空原始数组
        // that.option.legend.data = [];
        // that.option.series.data = [];
        // that.option.xAxis.data = [];
        // that.option.series = [];
        //调用echarts画图
        that.createCharts();
    }
    ngOnChanges() {
        let that = this;
        let dataflag = that.dataflag;
        that.lineData = that.data;

        //清空原始数组
        // that.option.legend.data = [];
        // that.option.series.data = [];
        // that.option.xAxis.data = [];
        // that.option.series = [];
        if (dataflag > 1)//can't run that.createCharts when ngOnChanges run firsttime
        {
            that.createCharts();
        }

    }
}