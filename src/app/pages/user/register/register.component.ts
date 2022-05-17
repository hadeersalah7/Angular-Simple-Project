import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }
  handleForm(register:NgForm){
    // console.log(register.value)
    if(register.valid){
      this._user.registerUser(register.value).subscribe(
        data => console.log(data)
      )
    }
  }
}
