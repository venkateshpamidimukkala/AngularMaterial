import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  
  public employees =[];

  constructor(private _dataService:DataService) { }

  ngOnInit() {
    
  this._dataService.getEmployees()
  .subscribe(data => this.employees = data);

  }

}
