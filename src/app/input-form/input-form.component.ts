import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  user_count: number = 1;

  model = new User(this.user_count, 'name', 0);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newUser() {
    this.model = new User(this.user_count, 'Enter name', 0);
    this.user_count++;
  }


  constructor() { 

  }

  ngOnInit(): void {
  }

}
