import { Component, OnInit } from '@angular/core';
import {Arrlinc}from'./MyLinc';
@Component({
  selector: 'app-mylink',
  templateUrl: './mylink.component.html',
  styleUrls: ['./mylink.component.css']
})
export class MylinkComponent implements OnInit {
  Arrlinc=["https://en.wikipedia.org/wiki/Bill_Gates","https://www.gatesfoundation.org/","https://www.gatesnotes.com/","https://twitter.com/billgates"];
  constructor() { }

  ngOnInit(): void {
  }

}
