/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {MovieListComponent} from './components/movie/movie-list/movie-list.component';
import {MovieDetailComponent} from './components/movie/movie-detail/movie-detail.component';
import {AuthGuard} from './services/auth-guard.service';
import {AdminComponent} from "./components/user/admin/admin.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'administrator', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'searchResults/:title', component: MovieListComponent},
  {path: 'searchDetail/:id', component: MovieDetailComponent},
  {path: 'apitest', component : HomeComponent},
  {path: 'test', component: TestComponent},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
