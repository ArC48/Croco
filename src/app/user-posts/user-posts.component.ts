import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  private currentUserId!: number;
  public currentUserPosts!: Observable<any>

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.currentUserId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string)

    this.currentUserPosts = this.usersService.getUserPosts(this.currentUserId)
  }

}
