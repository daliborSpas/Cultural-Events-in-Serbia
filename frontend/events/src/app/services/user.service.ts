import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000';

  login(username, password) {
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.url}/users/login`, data);
  }

  register(organization, street, number, city, first_name, last_name, telephone, areaactivity, website, email, username, password, organizationInfoText, privilege) {
    const data = {
      organization: organization,
      street: street,
      number: number,
      city: city,
      first_name: first_name,
      last_name: last_name,
      telephone: telephone,
      areaactivity: areaactivity,
      website: website,
      email: email,
      username: username,
      password: password,
      organizationInfoText: organizationInfoText,
      privilege: privilege
    }

    return this.http.post(`${this.url}/users/register`, data);
  }

  setNewPassword(username, newpassword){

    const data = {
      username: username,  
      newpassword: newpassword
    }

    return this.http.post(`${this.url}/users/setnewpassword/${username}`, data);

  }

  getUserData(username) {
    const data = {
      username: username
    }

    return this.http.post(`${this.url}/users/getUserData`, data);
  }

  getAllUserData() {
    return this.http.get(`${this.url}/users/getAllUserData`);
  }
}
