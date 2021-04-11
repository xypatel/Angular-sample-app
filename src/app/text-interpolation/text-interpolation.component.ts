import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-interpolation',
  templateUrl: './text-interpolation.component.html',
  styleUrls: ['./text-interpolation.component.css']
})
export class TextInterpolationComponent implements OnInit {

  constructor() { }

  name = 'Angular';
  url = './assets/img/angular.png';
  num = 2;
  
  ngOnInit(): void {
  }

}
