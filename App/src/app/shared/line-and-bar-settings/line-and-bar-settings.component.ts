import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-line-and-bar-settings',
  templateUrl: './line-and-bar-settings.component.html',
  styleUrls: ['./line-and-bar-settings.component.scss']
})
export class LineAndBarSettingsComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
