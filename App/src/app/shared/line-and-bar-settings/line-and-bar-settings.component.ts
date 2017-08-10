import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-line-and-bar-settings',
  templateUrl: './line-and-bar-settings.component.html',
  styleUrls: ['./line-and-bar-settings.component.scss']
})
export class LineAndBarSettingsComponent implements OnInit {
  @Output() inputChange:EventEmitter<any> = new EventEmitter();
  title: string;
  subtitle: string;
  settings:any;
  subtitleColor:string;
  titleColor:string;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.settings = {
      "title": "",
      "subtitle": "",
      "subtitleColor":"",
      "titleColor":""
    }
  }

  save(){
    this.settings.title = this.title;
    this.settings.subtitle = this.subtitle;
    this.settings.subtitleColor = this.subtitleColor;
    this.settings.titleColor = this.titleColor;
    this.inputChange.emit(this.settings);
  }

}
