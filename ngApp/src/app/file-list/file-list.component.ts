import { File } from './../file';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
  inputs: ['files'],
  outputs: ['SelectFile']
})
export class FileListComponent implements OnInit {

  public SelectFile = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(fil: File){
    this.SelectFile.emit(fil);
  }

}
