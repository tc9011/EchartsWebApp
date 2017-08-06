import { Component,ElementRef } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{

  constructor(public translate: TranslateService, private el:ElementRef){
    translate.addLangs(['zh', 'en']);
    translate.setDefaultLang('zh');
    translate.use('zh');
  }

  changeLanguage(){
    if (this.el.nativeElement.querySelector('button').innerText == 'English'){
      this.translate.use('en');
      this.el.nativeElement.querySelector('button').innerText = '中文';
    } else {
      this.translate.use('zh');
      this.el.nativeElement.querySelector('button').innerText = 'English';
    }

  }
}
