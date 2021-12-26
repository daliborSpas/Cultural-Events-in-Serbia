import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

export class AddEventComponent implements OnInit {

  event_type: string [] = [
    "Sport", "Kultura", "Zabava", "Muzika", "Koncerti", "Predstave", "Izlozbe", "Film", "Manifestacije", "Razni događaji", "Ostalo"
  ];

  eTitle = new FormControl('', [Validators.required]);
  eDescription = new FormControl('', [Validators.required]);
  ePlace = new FormControl('', [Validators.required]);
  eTimeOfEvent = new FormControl('', [Validators.required]);
  eSpace = new FormControl('', [Validators.required]);
  eType = new FormControl('', [Validators.required]);
  eDateOfEvent = new FormControl('', [Validators.required]);
  eAgeLimit = new FormControl('', [Validators.required]);
  eSpecialConditions = new FormControl('', [Validators.required]);
  eContent = new FormControl('', [Validators.required]);

  getErrorMessageForeTitle() {
    if (this.eTitle.hasError('required')) {
      return 'Unesite naziv događaja';
    }
  }
  getErrorMessageForeSpace() {
    if (this.eSpace.hasError('required')) {
      return 'Unesite prostor gge se događaj održava';
    }
  }
  getErrorMessageForeDescription() {
    if (this.eDescription.hasError('required')) {
      return 'Unesite kratak opis događaja';
    }
  }
  getErrorMessageForePlace() {
    if (this.ePlace.hasError('required')) {
      return 'Unesite adresa gde se događaj održava';
    }
  }
  getErrorMessageForeTimeOfEvent() {
    if (this.eTimeOfEvent.hasError('required')) {
      return 'Unesite vreme kada događaj počinje';
    }
  }
  getErrorMessageForeType() {
    if (this.eType.hasError('required')) {
      return 'Izaberite tip događaja';
    }
  }
  getErrorMessageForeDateOfEvent() {
    if (this.eDateOfEvent.hasError('required')) {
      return 'Izaberite datum održavanja gogađaja';
    }
  }
  getErrorMessageForeAgeLimit() {
    if (this.eAgeLimit.hasError('required')) {
      return 'Unesite ograničenje za godine';
    }
  }
  getErrorMessageForeSpecialConditions() {
    if (this.eSpecialConditions.hasError('required')) {
      return 'Unesite neke od karakteristika';
    }
  }
  getErrorMessageForeContent() {
    if (this.eContent.hasError('required')) {
      return 'Unesite nešto o samom događaju';
    }
  }


  constructor(private eventService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loginUser'));
  }

  user: User = {} as User;
 

  id: any;
  title: string;
  description: string;
  eventPlace: string;
  timeOfEvent: string;
  eventSpace: string;
  eventType: string;
  dateOfEvent: string;
  publishingDate: Date = new Date();
  imageUrl: string;
  ageLimit: string;
  author = this.user.organization;
  specialConditions: [];
  content: string;

  addEvent() {
    if(this.eTitle.valid && this.eDescription.valid && this.ePlace.valid && this.eSpace.valid && this.eTimeOfEvent && this.eType.valid && this.eDateOfEvent.valid && this.eAgeLimit.valid && this.eSpecialConditions.valid && this.eContent.valid) {
      this.eventService.addEvent(this.id, this.title, this.description, this.eventPlace, this.timeOfEvent, this.eventSpace, this.eventType, this.dateOfEvent, this.publishingDate, this.imageUrl, this.ageLimit, this.specialConditions, this.content).subscribe(resp => {
        if(resp["message"] == "Uspešno ste se dodali događaj!") {
          alert(resp["message"]);
          this.router.navigate(['/events']);
        } else {
          alert('Greška');
        }
      });
    } else {
      alert("Sva polja su obavezna i moraju biti popunjena!!!");
    }
  } 
}
