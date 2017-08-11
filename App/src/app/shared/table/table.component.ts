import {Component, EventEmitter, Output, OnChanges} from '@angular/core';
import {DataSource} from '@angular/cdk';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import {TranslateService} from "@ngx-translate/core";
import {SettingsService} from "../servers/settings.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  xCoordinates:string;
  yCoordinates:string;
  xData:string;
  yData:string;

  constructor(public translate: TranslateService, public settingsService:SettingsService){

  }


  ngOnChanges(){
    this.settingsService.saveData(this.xCoordinates,this.yCoordinates,this.xData,this.yData);
  }

  // save(){
  //   this.settingsService.saveData(this.xCoordinates,this.yCoordinates,this.xData,this.yData);
  // }

}
