import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CheckHomepageService} from "./shared/servers/check-homepage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewChecked{
  constructor (public translate: TranslateService, public checkHomepageService: CheckHomepageService) {
    translate.addLangs(['zh'/*, 'en'*/]);
    translate.setDefaultLang('zh');
    translate.use('zh');
  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    this.checkHomepageService.checkHomePage();
  }
}
