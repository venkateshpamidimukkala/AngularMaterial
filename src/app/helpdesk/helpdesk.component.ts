import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.css']
})
export class HelpdeskComponent implements OnInit {

    messageFrom :FormGroup;

    submitted=false;
    success=false;

  constructor(private formBuilder:FormBuilder ) {
    this.messageFrom=this.formBuilder.group({
       name:['',Validators.required],
      message:['',Validators.required],
    })
   }
   onSubmit(){
     this.submitted=true;
    if (this.messageFrom.invalid){
      alert("Button clicked");
      return;
    }
    alert("Successfully clicked");
    this.success=true;

   }
  ngOnInit() {
  }

}
