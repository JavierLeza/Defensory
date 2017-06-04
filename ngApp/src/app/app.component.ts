import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private ans: string;
  private loginout: string;

  constructor(
    private _service: UserService) { }

  ngOnInit() {
    if (this._service.checkStatus() === true) {
      this.ans="";
      this.loginout="Desconectar";
    } else {
      this.ans="hide";
      this.loginout="Acceder";
    }
  }
}
