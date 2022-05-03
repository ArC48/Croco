import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entryPage',
    pathMatch: 'full'
  },
  {
    path: 'entryPage',
    component: EntryPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'userInfo/:id',
    component: UserInfoComponent
  },
  {
    path: 'userPosts/:id',
    component:UserPostsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
