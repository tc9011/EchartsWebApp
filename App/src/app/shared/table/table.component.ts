import {Component, EventEmitter, Output, OnChanges} from '@angular/core';

import {TranslateService} from "@ngx-translate/core";
import {SettingsService} from "../servers/settings.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  @Output() dataChange:EventEmitter<any> = new EventEmitter();
  data:any;
  numberOfDataGroup:Array<number>;

  constructor(public translate: TranslateService, public settingsService:SettingsService){
    this.numberOfDataGroup = [1];
    this.data = {
      "xCoordinates": "",
      "yCoordinates": "",
      "xData": "",
      "yData": ""
    }
  }


  ngOnChanges(){

  }

  save(){
    this.data.xCoordinates = this.settingsService.splitData(this.data.xCoordinates);
    this.data.xData = this.settingsService.splitData(this.data.xData);
    this.dataChange.emit(this.data);
  }

  addItem(){
    this.numberOfDataGroup.push(this.numberOfDataGroup[this.numberOfDataGroup.length - 1] + 1);
  }

  deleteItem(){
    if (this.numberOfDataGroup.length > 1){
      this.numberOfDataGroup.pop();
    }
  }

}
