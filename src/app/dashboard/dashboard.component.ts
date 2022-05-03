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

  public users!: Observable<any>

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  goToUserPage(userId: number) {
    this.router.navigate(['userInfo', userId])
  }

}
