import { Component, OnInit } from '@angular/core';
import{Arr} from './MyArr';
@Component({
  selector: 'app-myfile',
  templateUrl: './myfile.component.html',
  styleUrls: ['./myfile.component.css']
})
export class MYfileComponent implements OnInit {
  Arr=["../assets/9_02.jpeg","../assets/bugatti-logo-car-2.jpg","../assets/unnamed.jpg"];
  constructor() { }

  ngOnInit(): void {
  }

}
