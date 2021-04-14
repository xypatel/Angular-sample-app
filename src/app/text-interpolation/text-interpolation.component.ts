import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-interpolation',
  templateUrl: './text-interpolation.component.html',
  styleUrls: ['./text-interpolation.component.css']
})
export class TextInterpolationComponent implements OnInit {

  constructor() { }

  name = 'Class';
  url = './assets/img/angular.png';
  num = 1 + 1;
  
  ngOnInit(): void {
  }

}
