import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppcomponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventthumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppcomponent,
    EventListComponent,
    EventthumbnailComponent,
    NavBarComponent
  ],

  bootstrap: [EventsAppcomponent]
})
export class AppModule { }
