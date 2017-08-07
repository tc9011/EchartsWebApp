import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{

  constructor(public translate: TranslateService){
    translate.addLangs(['zh', 'en']);
    translate.setDefaultLang('zh');
    translate.use('zh');
  }

  useEnglish(){
      this.translate.use('en');

  }

  useChinese(){
    this.translate.use('zh');
  }
}
