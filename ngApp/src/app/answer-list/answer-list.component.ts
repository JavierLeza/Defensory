import { Component, OnInit, EventEmitter } from '@angular/core';
import { Answer } from "./../answer";

@Component({
  selector: 'answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css'],
  inputs: ['answers'],
  outputs: [ 'SelectAnswer' ]
})
export class AnswerListComponent implements OnInit {

  public SelectAnswer = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(ans: Answer){
    this.SelectAnswer.emit(ans);
  }

}
