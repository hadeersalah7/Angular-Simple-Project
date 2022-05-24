import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
public userData = {name: ""}
public isLoggedIn = false

host = "http://localhost:3000/user/"
  constructor(private _httpt:HttpClient) { }

  registerUser(data:any) : Observable<any>{
    return this._httpt.post(`${this.host}register`, data)
  }

  loginUser(data:any) : Observable <any> {
    return this._httpt.post(`${this.host}login`, data)
  }

  logoutUser() : Observable <any> {
    return this._httpt.post(`${this.host}logout`, null)
  }

  allUsers() : Observable <any> {
    return this._httpt.get(`${this.host}showAll`)
  }

  me() : Observable <any> {
    return this._httpt.post(`${this.host}me`, null)
  }

  delUser(id: string) : Observable <any> {
    return this._httpt.delete(`${this.host}showAll/${id}`)
  }
}
