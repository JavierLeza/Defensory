import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Answer } from "./answer";

@Injectable()
export class EmailService {

  private _postEmailUrl = "api/sendemail";
  constructor(private _http: Http) { }

  postEmail(answer: Answer){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers});  
    return this._http.post(this._postEmailUrl,JSON.stringify(answer),  options)
      .map((response: Response) => response.json()); 
  }
}
