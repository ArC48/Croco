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

  public userInfo!: user;
  public currentUserId!: number;
  private userInfoSubscribe!: Subscription

  constructor(private router: Router , 
              private activatedRoute: ActivatedRoute,
              private usersService: UsersService
            ) {}

  ngOnInit(): void {
    this.currentUserId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string)
    this.userInfoSubscribe = this.usersService.getUserId(this.currentUserId).subscribe(res => {
      this.userInfo = res
    })
  }

  onUserPostsClick() {
    this.router.navigate(['userPosts', this.currentUserId])
    console.log(this.currentUserId)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.userInfoSubscribe.unsubscribe()
  }

}
