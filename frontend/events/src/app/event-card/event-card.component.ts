import { Component, OnInit } from '@angular/core';
import { Event } from '../models/events';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  constructor(private eventsService: EventsService) { }
  
  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('loginUser'));
    this.eventsService.getEventsData(user.organization).subscribe((eventData: Event[]) => {
      this.events = eventData;
    });

  }
  
  events: Event[] = [];

  goToEvent(event:string){
    this.eventsService.goToEvent(event);
  }
}