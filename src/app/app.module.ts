import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { TeamFormComponent } from './team-form/team-form.component';

import { TextInterpolationComponent } from './text-interpolation/text-interpolation.component';
import { BirthdayPipeComponent } from './birthday-pipe/birthday-pipe.component';
import { EventButtonComponent } from './event-button/event-button.component';
import { NameListComponent } from './name-list/name-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    TeamFormComponent,
    TextInterpolationComponent,
    BirthdayPipeComponent,
    EventButtonComponent,
    NameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
