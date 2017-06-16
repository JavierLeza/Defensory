import { Component, OnInit } from '@angular/core';
import { MapTypeStyle } from "angular2-google-maps/core";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';
  lat: number = 42.613142;
  lng: number = -5.558642;
  zoom: number = 18;
  constructor() { }

  ngOnInit() {
  }

}
