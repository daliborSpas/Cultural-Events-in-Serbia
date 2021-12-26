import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {

  constructor(private userServis: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userServis.getAllUserData().subscribe((userData: User[]) => {
      this.userDataOrg = userData;
      // sortiranje po nazivu
      this.userDataOrg.sort(function(a, b){
        if(a.organization < b.organization) { return -1; }
        if(a.organization > b.organization) { return 1; }
        return 0;
      });
    });
  }

  userDataOrg: User[] = [];

  logout() {
    this.router.navigate(['/']);
    localStorage.removeItem('loginUser');
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

}
