import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  data:any[] = []
  constructor(private _user:UserService) { }

  ngOnInit(): void {
this._user.allUsers().subscribe(
  data => this.data = data.data,
  (e) => this.data = e,

)
  }

  handleDel(userId: string, index: number){
    this._user.delUser(userId).subscribe(
      (res) => {console.log(res)},
      (e) => {console.log(e.message)},
      () => {this.data.splice(index, 1)}
    )
  }
}
