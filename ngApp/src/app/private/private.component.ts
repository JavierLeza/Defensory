import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user.service";

@Component({
  selector: 'login-form',
  providers: [UserService],
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

    constructor(
        private _service:UserService){}
 
    ngOnInit(){
        //this._service.checkCredentials();
    }
 
    logout() {
        this._service.logout();
    }

}
