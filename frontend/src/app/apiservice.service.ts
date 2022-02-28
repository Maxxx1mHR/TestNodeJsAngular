import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {UserComponent} from "./user/user.component";

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
    console.log(data, 'craeteapi=>');
    return this._http.post(`${this.apiUrl}`,data);
  }


  //delete data

  deleteData(id:any):Observable<any>
  {
    console.log(id, 'delete');
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }


  //update data

  updateData(data:any, id:any):Observable<any>
  {
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`,data);
  }

  //get single data
  getSingleData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }

  //ТЕСТ
  postData(user: UserComponent) {
    const body = { name: user.name, age: user.age }
    return this._http.post(
      'http://localhost:3000/api/values',
      body
    )
  }



}

