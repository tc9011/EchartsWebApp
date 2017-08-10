import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {FormControl, Validators} from '@angular/forms';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  xCoordinates:string;
  yCoordinates:string;
  xData:string;
  yData:string;

  ngOnInit() {

  }

  save(){
    let a = this.xCoordinates;
  }

}
