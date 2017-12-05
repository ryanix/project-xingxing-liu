import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  errorFlag: boolean;
  sucFlag: boolean;
  errorMsg = '';
  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceClient,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

  logout() {
    this.userService.logout()
      .subscribe( (data: any) => {
        this.router.navigate(['/login']);
      });
  }

  update() {
    this.userService.updateUser(this.user._id, this.user)
      .subscribe((user) => {
        if (user) {
          this.sucFlag = true;
          this.errorFlag = false;
        } else {
          this.sucFlag = false;
          this.errorFlag = true;
        }
      });
  }
}
