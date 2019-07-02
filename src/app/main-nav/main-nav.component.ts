import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(){
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      lastCtrl:['',Validators.required]
    });
  
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
