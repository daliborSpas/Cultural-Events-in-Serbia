import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../models/events';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {
  
  id: string = '';

  constructor(private eventsService: EventsService, private router: Router) { }
  
  events: Event[] = [];
  
  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('loginUser'));
    this.eventsService.getEventsData(user.organization).subscribe((eventData: Event[]) => {
      this.events = eventData;
    });
    
    this.id = this.eventsService.id;
  }

  visibilityOff(id: string) {
    this.eventsService.setVisibilityOff(id).subscribe(resp => {
      if (resp['message'] == 'ok') {
        alert('Događaj je uspešno arhiviran i više nije vidljiv na početnoj stranici drugim korisnicima. Samo vi možete da ga vidite na svom profilu. Ako želite da obrišete pošaljite zahtev za brisanje!');
        this.router.navigate(['/events']);
      } 
    });
  }

}