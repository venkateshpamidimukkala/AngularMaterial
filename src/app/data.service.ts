import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import {IEmployee} from  './employee';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string = "/assets/data/employee.json";

  constructor(private http:HttpClient) { }
  getEmployees(): Observable <IEmployee[]>{

    return this.http.get<IEmployee[]>(this._url);
    
  }
  getUsers(){
    return this.http.get('https://reqres.in/api/users'); 
  }  
}

