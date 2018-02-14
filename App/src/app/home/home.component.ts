import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cardState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active',   style({
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  cardState = {
    line: 'inactive',
    bar: 'inactive'
  };

  constructor() { }

  ngOnInit() {
  }

  toggleState(whichCard: string) {
    this.cardState[whichCard] = this.cardState[whichCard] === 'active' ? 'inactive' : 'active';
  }
}
