import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {NotificationTypings} from "../typings/notification.typings";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NotificationService {
  private subject = new Subject<any>();

  constructor() { }

  public publish(message: NotificationTypings) {
    this.subject.next(message);
  }

  public clearMessage() {
    this.subject.next();
  }

  public getData(): Observable<any> {
    return this.subject.asObservable();
  }
}

