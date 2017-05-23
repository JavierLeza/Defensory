import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Answer } from "./answer";

@Injectable()
export class AnswerService {

  private _getUrl = "/api/complains";
  private _postUrl = "/api/complain";
  private _putUrl = "/api/complain/";

  constructor(private _http: Http) { }

  getAnswers(){
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addComplain(complain: Answer){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(complain), options)
      .map((response: Response) => response.json()); 
  }
  updateAnswer(answer: Answer) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers});
    return this._http.put(this._putUrl + answer._id, JSON.stringify(answer), options)
      .map((response: Response) => response.json()); 
  }
}
