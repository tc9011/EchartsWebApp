import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <span>请选择图表类型:</span>
    <nav>
        <a routerLink="/line" routerLinkActive="active">折线图</a>
        <a routerLink="/bar" routerLinkActive="active">柱状图</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Echarts Web App';
}