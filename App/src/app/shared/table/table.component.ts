import {Component, EventEmitter, Input, Output, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';

import {TranslateService} from "@ngx-translate/core";
import {SettingsService} from "../servers/settings.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild('deleteBtn') deleteBtn:any;
  @Output() dataChange:EventEmitter<any> = new EventEmitter();
  data:any;
  numberOfDataGroup:Array<number>;

  constructor(public translate: TranslateService, public settingsService:SettingsService, private el:ElementRef){
    this.numberOfDataGroup = [1];
    this.data = {
      "xCoordinates": "",
      "yCoordinates": "",
      "xData": "",
      "yData": ""
    }
  }


  ngOnInit(){
    this.deleteBtn.disabled = true;
  }

  save(){
    this.data.xCoordinates = this.settingsService.splitData(this.data.xCoordinates);
    this.data.xData = this.settingsService.splitData(this.data.xData);
    this.dataChange.emit(this.data);
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
