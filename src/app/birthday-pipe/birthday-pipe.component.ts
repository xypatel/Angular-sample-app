import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-pipe',
  templateUrl: './birthday-pipe.component.html',
  styleUrls: ['./birthday-pipe.component.css']
})
export class BirthdayPipeComponent implements OnInit {

  constructor() { }
  
  birthday = new Date(2020, 3, 1);

  ngOnInit(): void {
  }

}
