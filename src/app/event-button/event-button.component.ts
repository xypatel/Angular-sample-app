import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-button',
  templateUrl: './event-button.component.html',
  styleUrls: ['./event-button.component.css']
})
export class EventButtonComponent implements OnInit {

  constructor() { }

  buttonTitle:string = "Hide";
  visible:boolean = false;

  toggleHidden(){
    
    this.visible = this.visible?false:true;
    this.buttonTitle = this.visible?"Hide":"Show";
    
    
  }
  
  ngOnInit(): void {
  }

}
