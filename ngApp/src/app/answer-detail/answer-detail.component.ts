import { Component, OnInit, EventEmitter, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf'
import * as html2canvas from 'html2canvas'
declare let jsPDF;

@Component({
  selector: 'answer-detail',
  templateUrl: './answer-detail.component.html',
  styleUrls: ['./answer-detail.component.css'],
  inputs: ['answer'],
  outputs: ['updateAnswerEvent']
})
export class AnswerDetailComponent implements OnInit {
  el: ElementRef;
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

  updateAnswer() {
    this.updateAnswerEvent.emit(this.answer);
  }

  createPdf(): void {
    /*
        html2canvas(document.getElementById("pdftest"), {
            onrendered: function(canvas) {
              var img = canvas.toDataURL("image/png");
              var doc = new jsPDF();
              doc.addImage(img, 'JPEG',20,20);
              doc.save('test.pdf');
            }
        });
        */
    var doc = new jsPDF('p', 'mm', 'a4');
    doc.text(20, 20, "Informe de Incidencia");
    doc.text(20, 30, "Nombre:" + this.answer.name + " " + this.answer.lastName);
    doc.text(20, 40, "Asunto:" + this.answer.request);
    doc.text(20, 50, "Fecha de subida de la incidencia:" 
                       + this.answer.postDate);
    doc.text(20, 60, "Correo electrónico:" + this.answer.email);
    doc.text(20, 70, "Tema:" + this.answer.topic);
    var splitReason = doc.splitTextToSize(this.answer.reason, 1);
    doc.text(20, 80, "Motivo:" + splitReason);
    doc.text(20, 100, "Fecha de respuesta:" + this.answer.answerDate);
    var splitAnswer = doc.splitTextToSize(this.answer.answer, 1);
    doc.text(20, 110, "Respuesta:" + splitAnswer);
    doc.save('Test.pdf');

  }

}
