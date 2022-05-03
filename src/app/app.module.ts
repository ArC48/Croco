import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPostsComponent } from './user-posts/user-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserInfoComponent,
    PageNotFoundComponent,
    EntryPageComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
