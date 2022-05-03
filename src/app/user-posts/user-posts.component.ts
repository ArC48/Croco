import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  //id of the current user
  private currentUserId!: number;

  //observable to which we assign the current user's posts
  // it's public as we use it in the template to display the data
  public currentUserPosts!: Observable<any>

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.currentUserId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string)

    //using the method created in the user service, we get the specific user's posts by their id.
    this.currentUserPosts = this.usersService.getUserPosts(this.currentUserId)
  }

}
