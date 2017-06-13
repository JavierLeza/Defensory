import { Component, OnInit } from '@angular/core';
import { UserService, User } from "app/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private access: string;
  private disconnect: string;
  private ans: string;
  private loginout: string;
  public user = new User('', '');
  users: Array<User>;
  public errorMsg = '';

  constructor(
    private _service: UserService) { }
  login() {
    if (!this._service.login(this.user, this.users)) {
      this.errorMsg = 'Failed to login';
    } else {
      this.access = "hide";
      this.disconnect = "";
      this.ans = "";
    }
  }

  logout() {
    this.disconnect = this._service.logout();
    this.access = "";
    this.ans = "hide";
  }

  ngOnInit() {
    this._service.getUsers()
      .subscribe(resUserData => this.users = resUserData);
    if (this._service.checkStatus() === true) {
      this.ans = "";
      this.access = "hide";
      this.disconnect = "";
      this.loginout = "Desconectar";
    } else {
      this.ans = "hide";
      this.access = "";
      this.disconnect = "hide";
      this.loginout = "Acceder";
    }
  }
}
