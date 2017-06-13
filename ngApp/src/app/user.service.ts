import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

@Injectable()
export class UserService {
  private _getUrl = "/api/users";
  private _postUrl = "/api/newUser";

  constructor(
    private _router: Router, private _http: Http) { }


  getUsers() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addUser(user: User){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers});   
    return this._http.post(this._postUrl, JSON.stringify(user), options)
      .map((response: Response) => response.json()); 
  }

  logout() {
    localStorage.removeItem("user");
    return "hide";
  }

  login(user, users) {
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem("user", authenticatedUser.email);
      return true;
    }
    return false;

  }

  checkStatus() {
    if (localStorage.getItem("user") === null) {
      return false;
    }
    if (localStorage.getItem("user") !== null) {
      return true;
    }
  }
}
