import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {UserServiceClient} from '../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title: String;
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
