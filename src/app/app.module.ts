import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import {OmdbServiceClient} from './services/omdb.service.client';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie/movie-detail/movie-detail.component';
import {SharedService} from './services/shared.service';
import {UserServiceClient} from './services/user.service.client';
import {AuthGuard} from './services/auth-guard.service';
import { AdminComponent } from './components/user/admin/admin.component';
import {AdminGuard} from './services/admin-guard.service';
import { UserDetailComponent } from './components/user/admin/user-detail/user-detail.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { ControlBarComponent } from './components/movie/control-bar/control-bar.component';
import {CollectionServiceClient} from './services/collection.service.client';
import { MaterialComponent } from './components/movie/material/material.component';
import {MovieServiceClient} from './services/movie.service.client';
import {MaterialServiceClient} from './services/material.service.client';
import {ReviewServiceClient} from './services/review.service.client';
import {UserPageComponent} from './components/user/user-page/user-page.component';
import { CollectionComponent } from './components/collection/collection/collection.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    HomePageComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    MovieListComponent,
    MovieDetailComponent,
    AdminComponent,
    UserDetailComponent,
    NavbarComponent,
    ControlBarComponent,
    MaterialComponent,
    UserPageComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [
    TestService,
    OmdbServiceClient,
    SharedService,
    UserServiceClient,
    CollectionServiceClient,
    MovieServiceClient,
    MaterialServiceClient,
    ReviewServiceClient,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
