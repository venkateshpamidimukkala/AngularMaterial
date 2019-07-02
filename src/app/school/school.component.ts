import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  power = 5;
  factor = 1;
  title ='Angular Project 7';
  name='venkatesh';

  birthday=new Date(1994,1,1);
  toggle=true;
   todayDate=new Date();
jsonval={
    name:'ROX',age:'24',address:{al:'PTR',a2:'NTR',}
  };
  // months=["Jan","Feb","March","April","May","june","July","Aug","Sep","Oct","Nov","DEC"];

  constructor() { }

  ngOnInit() {
  }
  getFormat(){
    return this.toggle ? 'shortDate':'fullDate';
  }
  toggleFormat(){
    console.log("to change date format");
    this.toggle=!this.toggle;
  }

}
