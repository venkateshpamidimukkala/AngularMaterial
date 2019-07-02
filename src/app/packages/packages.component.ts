import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
h1Style:boolean=false;
users:Object;
  constructor( private data:DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => { 
      this.users = data
      console.log(this.users)
    })
  }

  
  }

