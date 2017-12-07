import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {SharedService} from '../../../services/shared.service';
import {UserServiceClient} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user;
  constructor(
    private _location: Location,
    private sharedService: SharedService,
    private userService: UserServiceClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

  logout() {
    this.user = null;
    this.sharedService.user = null;
    this.userService.logout()
      .subscribe( (data: any) => {
        this.router.navigate(['/']);
      });
  }

  goBack() {
    this._location.back();
  }

  goForward() {
    this._location.forward();
  }
}
