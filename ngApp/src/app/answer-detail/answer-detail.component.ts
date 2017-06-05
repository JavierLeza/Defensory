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
    var doc = new jsPDF('p', 'mm', 'a4');
    var finalReasonString = this.splitText(this.answer.reason.toString());
    var finalAnswerString = this.splitText(this.answer.reason.toString());
    doc.text(20, 20, "Informe de Incidencia");
    doc.text(20, 30, "Nombre:" + this.answer.name + " " + this.answer.lastName);
    doc.text(20, 40, "Asunto:" + this.answer.request);
    doc.text(20, 50, "Fecha de subida de la incidencia:"
      + this.answer.postDate);
    doc.text(20, 60, "Correo electrónico:" + this.answer.email);
    doc.text(20, 70, "Tema:" + this.answer.topic);
    doc.text(20, 80, "Motivo:" + finalReasonString);
    doc.addPage();
    doc.text(20, 20, "Fecha de respuesta:" + this.answer.answerDate);
    doc.text(20, 30, "Respuesta:" + finalAnswerString);
    doc.save('Test.pdf');

  }

  splitText(originalText){
    var finalText="", i;
    console.log(originalText);
    console.log(originalText.length);
    if(!(originalText.length<=64)){
      for(i=0;i<originalText.length;i++){
        if(i%64 == 0){
          
          finalText = finalText + "\n";
        }
        finalText = finalText + originalText.charAt(i);
      }
      return finalText;
    }else{
      return originalText;
    }

  }

}
