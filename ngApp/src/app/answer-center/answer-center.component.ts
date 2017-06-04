import { Answer } from './../answer';

import { Component, OnInit } from '@angular/core';
import { AnswerService } from "./../answer.service";
import { UserService } from "app/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'answer-center',
  templateUrl: './answer-center.component.html',
  styleUrls: ['./answer-center.component.css'],
  providers: [AnswerService]
})
export class AnswerCenterComponent implements OnInit {

  answers: Array<Answer>;

  selectedAnswer: Answer;

  constructor(private _answerService: AnswerService, private _service: UserService, private _router: Router) { }

  ngOnInit() {
    if (this._service.checkStatus() === false) {
      this._router.navigate(['home']);
    } else {
      this._answerService.getAnswers()
        .subscribe(resAnswerData => this.answers = resAnswerData);
    }
  }

  onSelectAnswer(answer: any) {
    this.selectedAnswer = answer;
    console.log(this.selectedAnswer);
  }

  onUpdateAnswerEvent(answer: any) {
    this._answerService.updateAnswer(answer)
      .subscribe(resUpdatedAnswer => answer = resUpdatedAnswer);
    this.selectedAnswer = null;
  };

}
