import { Component, OnInit } from '@angular/core';
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
    private sharedService: SharedService,
    private userService: UserServiceClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

  logout() {
    this.userService.logout()
      .subscribe( (data: any) => {
        this.user = null;
        this.sharedService = null;
        this.router.navigate(['/']);
      });
  }
}