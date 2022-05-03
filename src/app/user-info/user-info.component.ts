import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { user } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  //assign specific user with all its data to this variable which uses user interface as a type
  public userInfo!: user;

  //here we have an id of a user we've assigned to userInfo variable earlier
  public currentUserId!: number;

  // subscription typed variable that is destroyed once we change the route
  private userInfoSubscribe!: Subscription

  constructor(private router: Router , 
              private activatedRoute: ActivatedRoute,
              private usersService: UsersService
            ) {}

  ngOnInit(): void {
    // we get the id from an active route
    this.currentUserId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string)
    // using the getUserId method from the service, we get the specific user info from the api 
    //  and assign it to the variable which then we subscribe
    this.userInfoSubscribe = this.usersService.getUserId(this.currentUserId).subscribe(res => {
      this.userInfo = res
    })
  }

  // navigate to the user's posts' page
  onUserPostsClick() {
    this.router.navigate(['userPosts', this.currentUserId])
    console.log(this.currentUserId)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.userInfoSubscribe.unsubscribe()
  }

}
