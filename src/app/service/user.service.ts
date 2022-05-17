import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
host = "http://localhost:3000/user/"
  constructor(private _httpt:HttpClient) { }

  registerUser(data:any) : Observable<any>{
    return this._httpt.post(`${this.host}register`, data)
  }

  loginUser(data:any) : Observable <any> {
    return this._httpt.post(`${this.host}login`, data)
  }

  allUsers() : Observable <any> {
    return this._httpt.get(`${this.host}showAll`)
  }
}
