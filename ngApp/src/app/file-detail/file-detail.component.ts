import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'file-detail',
  templateUrl: './file-detail.component.html',
  styleUrls: ['./file-detail.component.css'],
  inputs: ['file']
})
export class FileDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
