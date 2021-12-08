import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  //Почему _http а не просто http или любое другое имя
  constructor(private _http: HttpClient) { }

  //Connent fronted to backend

  //apiUrl тоже нельзя изменить?
  apiUrl = 'http://localhost:3000/user';

  //get all data

  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }

  //create data
  createData(data:any):Observable<any>
  {
    return this._http.post(`${this.apiUrl}`,data);
  }






}

