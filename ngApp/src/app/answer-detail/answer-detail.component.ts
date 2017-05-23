import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'answer-detail',
  templateUrl: './answer-detail.component.html',
  styleUrls: ['./answer-detail.component.css'],
  inputs: ['answer'],
  outputs: ['updateAnswerEvent']
})
export class AnswerDetailComponent implements OnInit {
  answer: any;

  private editAnswer: boolean = false;
  private updateAnswerEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.editAnswer = false;
  }

  onAnswerClick() {
    this.editAnswer = true;
  }

  updateAnswer(){
    this.updateAnswerEvent.emit(this.answer);
  }

}
