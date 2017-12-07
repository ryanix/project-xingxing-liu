import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../../services/user.service.client';
import {CollectionServiceClient} from '../../../services/collection.service.client';
import {MaterialServiceClient} from '../../../services/material.service.client';
import {ReviewServiceClient} from '../../../services/review.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  loggedInUser;
  user;
  index = 1;
  errFlag: boolean;
  errMsg = 'Please Login In first.';
  sucFlag: boolean;
  sucMsg = 'Add sucessfully';


  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private userService: UserServiceClient,
    private collectionService: CollectionServiceClient,
    private materialService: MaterialServiceClient,
    private reviewService: ReviewServiceClient,
  ) { }

  ngOnInit() {
    this.loggedInUser = this.sharedService.user;
    this.route.params.subscribe( params => {
      const id = params['uid'];
      this.userService.findUserById(id)
        .subscribe( u => {
          this.user = u;
          console.log('userpage line 41', u);
        });
    });
  }

  changeIndex(i) {
    this.index = i;
  }

  addAdFriend() {
    if (!this.loggedInUser) {
      this.errFlag = true;
      this.sucFlag = false;
    } else {
      this.userService.addAsFriend(this.user._id, this.loggedInUser._id)
        .subscribe( u => {
          this.errFlag = false;
          this.sucFlag = true;
        });
    }
  }
}
