import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000';

  sendemail(username, email) {
    const data = {
      username: username,
      email: email
    }

    return this.http.post(`${this.url}/resetpass/sendmail`, data);
  }
}
