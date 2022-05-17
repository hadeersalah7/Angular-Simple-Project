import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string = ''

  constructor(private _user:UserService, private _router: Router) { }
loginForm = new FormGroup({
  email: new FormControl("", [Validators.required, Validators.email]),
  password: new FormControl("", [Validators.required, Validators.minLength(5)]),
})

get email() {return this.loginForm.get('email')};
get password() {return this.loginForm.get('password')}
  ngOnInit(): void {

let token = null
token = localStorage.getItem('appToken')
  }

login(){
this._user.loginUser(this.loginForm.value).subscribe(
  res => {
    localStorage.setItem('appToken', res.data.token)
  },
  (e) => {
    e.msg = 'Error in loading form'
  },
  () => {
    this._router.navigateByUrl('user/all')
  }
)
}

  }



