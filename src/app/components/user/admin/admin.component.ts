import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service';
import {UserServiceClient} from '../../../services/user.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user;
  keys;
  importantIndex = ['_id', 'password', '__v', 'userType', 'friends', 'favirates'];
  userList;
  collections;
  reviewList;

  constructor(
    private sharedService: SharedService,
    private userService: UserServiceClient,
  ) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.keys = Object.keys(this.user);
    this.userService.findAllUsers()
      .subscribe( users => {
        this.userList = users;
      });
  }


}
