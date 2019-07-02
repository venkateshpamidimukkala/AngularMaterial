import { Component, OnInit, PACKAGE_ROOT_URL } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.css']
})
export class DeploymentComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  


  display:string[]=['id','title','albumId','thumbnilUrl'];

  readonly Root_URL='https://jsonplaceholder.typicode.com/photos';
  posts:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
getPosts(){
this.posts=this.http.get(this.Root_URL)
}

addColumn() {
  const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
  this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
}

removeColumn() {
  if (this.columnsToDisplay.length) {
    this.columnsToDisplay.pop();
  }
}

shuffle() {
  let currentIndex = this.columnsToDisplay.length;
  while (0 !== currentIndex) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap
    let temp = this.columnsToDisplay[currentIndex];
    this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
    this.columnsToDisplay[randomIndex] = temp;
  }
}
}
