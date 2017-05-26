import { Component, OnInit } from '@angular/core';
import { MapTypeStyle } from "angular2-google-maps/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'My first angular2-google-maps project';
  lat: number = 42.613142;
  lng: number = -5.558642;
  zoom: number = 18;

  constructor() { }

  ngOnInit() {
  }

}
