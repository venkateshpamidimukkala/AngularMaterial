import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Title:String ='SSSVV';

   showFiller = false;
  spaceScreens: Array<any>;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(private router:Router) { 

    // this.http.get('./assests/data.json')
    // .map(respone => response.json().screenshots)
    // .subscribe(res=>this.spaceScreens=res);
  }
 
  ngOnInit() {
  }
  btnClick= function () {
          this.router.navigateByUrl('/deployment');
  };
  btnClick1= function ()
   {
    this.router.navigateByUrl('/main-nav');
   };
btnClick2= function () 
  {
  this.router.navigateByUrl('/packages');
  };
btnClick3= function ()
 {
  this.router.navigateByUrl('/helpdesk');
 };
 btnClick4=function(){
   this.router.navigateByUrl('/login');
 };

 btnTMSClick1=function(){
  this.router.navigateByUrl('/calender-view');
};
btnTMSClick2=function(){
  this.router.navigateByUrl('/training-list');
};
btnTMSClick3=function(){
  this.router.navigateByUrl('/training-status');
};
btnTMSClick4=function(){
  this.router.navigateByUrl('/schedule-training');
}
}
