import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()
export class CheckHomepageService {
  public isHomepage: boolean;

  constructor(public Location: Location) {

  }

  public checkHomePage() {
    this.isHomepage = this.Location.path() === '';
  }

}
