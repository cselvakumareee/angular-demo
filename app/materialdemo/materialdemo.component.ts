import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materialdemo',
  templateUrl: './materialdemo.component.html',
  styleUrls: ['./materialdemo.component.scss']
})
export class MaterialdemoComponent implements OnInit {
  hide: any = 2;
  // tslint:disable-next-line: no-inferrable-types
  show: number = 50;
  constructor() { }

  ngOnInit() {
  }

}
