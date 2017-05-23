import { Component, OnInit } from '@angular/core';
import { Answer } from "./../answer";
import { AnswerService } from "./../answer.service";

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css'],
  providers: [ AnswerService ]
})
export class ComplainComponent implements OnInit {

  selectedComplain: Answer;

  complains: Array<Answer>;

  constructor(private _complainService: AnswerService) { }

  ngOnInit() {
  }

  onSubmitAddComplain(complain: Answer) {
    this._complainService.addComplain(complain)
      .subscribe(resNewComplain => {
        this.complains.push(resNewComplain);
        this.selectedComplain = resNewComplain;
      });
  }

  req = ['Queja', 'Sugerencia'];
  emreq = ['.unileon.es', '.estudiantes.unileon.es'];
}

