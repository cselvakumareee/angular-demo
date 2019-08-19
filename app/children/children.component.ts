import { Component, OnInit, Input } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  myname: string = 'selva';
  // tslint:disable-next-line: no-inferrable-types
  @Input() public currentprice: number = 500;
  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.teachermessage$.subscribe(
      message => {
        if (message === 'good morning') {
          alert('goodmorning teacher');
        }
        // tslint:disable-next-line: one-line
        else if (message === 'well done') {
          alert('thank u');
        }

      }
    );
  }
 greetselva() {
   alert('my name is selva');
 }
}
