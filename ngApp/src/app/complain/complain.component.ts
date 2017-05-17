import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  request = ['Queja', 'Sugerencia' ];
  request2 = ['.unileon.es', '.estudiantes.unileon.es' ];
}
