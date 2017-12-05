import { Injectable } from '@angular/core';
import {CanActivate, Route, Router} from '@angular/router';
import {UserServiceClient} from './user.service.client';

@Injectable()

export class AdminGuard implements CanActivate {
  constructor(
    private userService: UserServiceClient,
    private router: Router,
  ) {}

  canActivate() {
    return this.userService.adminLoggedIn();
  }
}
