import { Component, OnInit } from '@angular/core';
import { File } from './../file'; 

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  files: File[] = [
    {"_id": "1", "title": "prueba", "length": "12341"},
    {"_id": "2", "title": "urlawdad", "length": "1234121"}
  ];

  selectedFile: File;

  constructor() { }


  ngOnInit() {
  }

  onSelectFile(file:any){
    this.selectedFile = file;
    console.log(this.selectedFile);
  }

}
