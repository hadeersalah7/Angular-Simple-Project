import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  host2 = "http://localhost:3000/post/"


  constructor(private _myHttp:HttpClient) { }

  newPost(data: any): Observable<any>{
    return this._myHttp.post(`${this.host2}add`, data)
    }
}
