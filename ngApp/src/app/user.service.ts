import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

var users = [
  new User('admin', 'admin'),
  new User('user1@gmail.com', 'a23')
];

@Injectable()
export class UserService {

  constructor(
    private _router: Router) { }

  logout() {
    localStorage.removeItem("user");
    return "hide";
  }

  login(user) {
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem("user", authenticatedUser.email);
      return true;
    }
    return false;

  }

 /* checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['login']);
    }
    if (localStorage.getItem("user") !== null) {
      this._router.navigate(['private']);
    }
  }*/
    checkStatus() {
    if (localStorage.getItem("user") === null) {
      return false;
    }
    if (localStorage.getItem("user") !== null) {
      return true;
    }
  }
}
