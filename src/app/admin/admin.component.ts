import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';
import * as jsPDF from 'jspdf';


export interface Element {
  position: number;
  firstName: string;
  lastName: string;
  email: string;
}
const ELEMENT_DATA: Element[] = [
  {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
  {position: 1, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
  {position: 1, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
  {position: 1, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
  {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'}
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'JSON to Table Example';
  displayedColumns = ['position', 'firstName', 'lastName', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  
  constructor(private httpService: HttpClient) { }
  arrBirds:string [];
  ngOnInit() {
    this.httpService.get('./assets/data/employee.json').subscribe(
      data => {
        this.arrBirds = data as string [];	
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  downloadPDF(){
    const doc=new jsPDF();
    doc.text('Some Text here I LIke Angular 6',10,10);
    doc.save('Test.pdf');
  }

  @ViewChild('content') content :ElementRef;
  public PDF(){
    let doc=new jsPDF();
    let specialElementHandlers={
      '#editor':function(element,renderer){
        return true;
      }
    };
    let content=this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15,15,
      {
      'width':190,
      'elementHandlers':specialElementHandlers
    });
    doc.save('Welcome HTML TO PDF CONVERT.pdf');
  } 
}
