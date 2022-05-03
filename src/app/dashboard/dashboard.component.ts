import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // users variable to which we assign all the users from the API
  public users!: Observable<any>

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    //Get all the users via users' service
    this.users = this.usersService.getUsers();
  }

  //navigate to the specific user's page by their id
  goToUserPage(userId: number) {
    this.router.navigate(['userInfo', userId])
  }

}
