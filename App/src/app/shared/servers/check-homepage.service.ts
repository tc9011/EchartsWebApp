import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class CheckHomepageService {
  public isHomepage: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    const url = route.url;
  }

}
