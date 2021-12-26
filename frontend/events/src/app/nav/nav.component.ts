import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('loginUser'));
    this.userService.getUserData(user.username).subscribe((userData: User) => {
      this.userData = userData;
    });
  }
  
  userData: User = {} as User;

  logout() {
    this.router.navigate(['/']);
    localStorage.removeItem('loginUser');
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }


}
