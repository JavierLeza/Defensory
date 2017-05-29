import { Component, OnInit } from '@angular/core';
import { UserService, User } from "app/user.service";

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public user = new User('', '');
  public errorMsg = '';

  constructor(private _service: UserService) { }
  login() {
    if (!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
  }
    ngOnInit() {
      this._service.checkCredentials();
    }

  }
