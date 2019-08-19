import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private teachermessagesource = new Subject<string>();
  teachermessage$ = this.teachermessagesource.asObservable();
  constructor() { }
  sendMessage(message: string) {
  this.teachermessagesource.next(message);
  }
}
