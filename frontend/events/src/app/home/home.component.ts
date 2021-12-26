import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TermsComponent } from '../terms/terms.component';
import { Event } from '../models/events';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private eventsService: EventsService) { }

  allevents: Event[] = [];

  ngOnInit(): void {
    this.eventsService.getAllEventsData().subscribe((allEvents: Event[]) => {
      this.allevents = allEvents;
    });
  }

  imagesForSlider = [
    { path: '/assets/photos/img-01.jpg' },
    { path: '/assets/photos/img-02.jpg' },
    { path: '/assets/photos/img-03.jpg' },
    { path: '/assets/photos/img-04.jpg' },
    { path: '/assets/photos/img-05.jpg' },
    { path: '/assets/photos/img-06.jpg' },
    { path: '/assets/photos/img-07.jpg' },
    { path: '/assets/photos/img-08.jpg' },
    { path: '/assets/photos/img-09.jpg' },
    { path: '/assets/photos/img-10.jpg' },
    { path: '/assets/photos/img-11.jpg' },
    { path: '/assets/photos/img-12.jpg' }
  ];

  openTerms() {
    this.dialog.open(TermsComponent);
  }

}
