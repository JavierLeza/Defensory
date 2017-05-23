import { Answer } from './../answer'; 

import { Component, OnInit } from '@angular/core';
import { AnswerService } from "./../answer.service";

@Component({
  selector: 'answer-center',
  templateUrl: './answer-center.component.html',
  styleUrls: ['./answer-center.component.css'],
  providers: [AnswerService]
})
export class AnswerCenterComponent implements OnInit {

  answers: Array<Answer>;

  selectedAnswer: Answer;

  constructor(private _answerService: AnswerService) { }

  ngOnInit() {
    this._answerService.getAnswers()
      .subscribe(resAnswerData => this.answers = resAnswerData);
  }

  onSelectAnswer(answer:any){
    this.selectedAnswer = answer;
    console.log(this.selectedAnswer);
  }

  onUpdateAnswerEvent(answer: any){
    this._answerService.updateAnswer(answer)
    .subscribe(resUpdatedAnswer => answer = resUpdatedAnswer);
    this.selectedAnswer = null;
  };

}
