import { Component, OnInit } from '@angular/core';
export interface cal {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-calender-view',
  templateUrl: './calender-view.component.html',
  styleUrls: ['./calender-view.component.css']
})

export class CalenderViewComponent implements OnInit {
  cals: cal[] = [
    {value: 'State-0', viewValue: 'State'},
    {value: 'central-1', viewValue: 'central'},
    {value: 'Academic-2', viewValue: 'Academic'},
    {value:'ALL-3',viewValue: 'ALL'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
