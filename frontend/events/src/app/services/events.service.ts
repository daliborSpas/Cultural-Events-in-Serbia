import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000';

  id: string = '';

  addEvent(id, title, description, eventPlace, timeOfEvent, eventSpace, eventType, dateOfEvent, publishingDate, imageUrl, ageLimit, specialConditions, content) {
    
    let user = JSON.parse(localStorage.getItem('loginUser'));

    const data = {
      id: id,
      title: title,
      description: description,
      eventPlace: eventPlace,
      timeOfEvent: timeOfEvent,
      eventSpace: eventSpace,
      eventType: eventType,
      dateOfEvent: dateOfEvent,
      publishingDate: publishingDate,
      imageUrl: imageUrl,
      ageLimit: ageLimit,
      author: user.organization,
      specialConditions: specialConditions,
      content: content
    }

    return this.http.post(`${this.url}/organization/addEvent`, data);
  }

  getEventsData(author) {
    const data = {
      author: author
    }
    return this.http.post(`${this.url}/organization/getEventsData`, data);
  }

  getAllEventsData() {
    
    return this.http.get(`${this.url}/organization/getAllEventsData`);
  }

  goToEvent(id:string){
    return this.id = id;
  }

  setVisibilityOff(id) {
    const data = {
      id: id
    }
    return this.http.post(`${this.url}/organization/setVisibilityOff`, data);
  }

}