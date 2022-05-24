import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _user:UserService, private _router: Router){
    this._user.me().subscribe(
      res => {
        this._user.userData = res.data
      },

      (e) => {
        this._router.navigateByUrl('/')
      },

    () => {
      this._user.isLoggedIn = true
    }

    )
  }
}
