import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service';
import {UserServiceClient} from '../../../services/user.service.client';
import {CollectionServiceClient} from '../../../services/collection.service.client';
import {MaterialServiceClient} from '../../../services/material.service.client';
import {ReviewServiceClient} from '../../../services/review.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user;
  errorFlag: boolean;
  sucFlag: boolean;

  userList;
  collectionList;
  materialList;
  reviewList;

  username = '';
  password = '';
  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  dateCreated = '';

  errFlag: boolean;
  errMsg = 'Username already exists~!!';

  constructor(
    private sharedService: SharedService,
    private userService: UserServiceClient,
    private collectionService: CollectionServiceClient,
    private materialService: MaterialServiceClient,
    private reviewService: ReviewServiceClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userService.findAllUsers()
      .subscribe( users => {
        this.userList = users;
      });
    this.collectionService.fetchAllCollection()
      .subscribe( cs => {
        this.collectionList = cs;
      });
    this.materialService.findAllMaterial()
      .subscribe( ms => {
        this.materialList = ms;
      });
    this.reviewService.findAllReview()
      .subscribe( rs => {
        this.reviewList = rs;
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

  deleteCollection(c) {
    this.collectionService.deleteCollection(c)
      .subscribe( cr => {
        this.collectionService.fetchAllCollection()
          .subscribe( r => {
            this.collectionList = r;
          });
      });
  }

  deleteMaterial(id) {
    this.materialService.deleteMaterial(id)
      .subscribe( u => {
        this.materialService.findAllMaterial()
          .subscribe( r => {
            this.materialList = r;
          });
      });
  }

  deleteReview(id) {
    this.reviewService.deleteReview(id)
      .subscribe( u => {
        this.reviewService.findAllReview()
          .subscribe( r => {
            this.reviewList = r;
          });
      });
  }

  deleteUser(id) {
    this.userService.deleteUser(id)
      .subscribe( u => {
        this.userService.findAllUsers()
          .subscribe( us => {
            this.userList = us;
          });
      });
  }

  upgrade(user) {
    user.userType = 0;
    this.userService.updateUser(user._id, user)
      .subscribe( u => {
        this.userService.findAllUsers()
          .subscribe( us => {
            this.userList = us;
          });
      });
  }

  downgrade(user) {
    user.userType = 1;
    this.userService.updateUser(user._id, user)
      .subscribe( u => {
        this.userService.findAllUsers()
          .subscribe( us => {
            this.userList = us;
          });
      });
  }

  create() {
    this.userService.findUserByName(this.username)
      .subscribe((user) => {
        if (user) {
          this.errFlag = true;
        } else {
          this.errFlag = false;
          const nuser = {};
          nuser['username'] = this.username;
          nuser['password'] = this.password;
          nuser['firstName'] = this.firstName;
          nuser['lastName'] = this.lastName;
          nuser['email'] = this.email;
          nuser['phone'] = this.phone;
          nuser['dateCreated'] = new Date();
          this.userService.register(nuser)
            .subscribe( (nu) => {
              this.userService.findAllUsers()
                .subscribe( us => {
                  this.userList = us;
                });
            });
        }
      });
  }

  logout() {
    this.userService.logout()
      .subscribe( (data: any) => {
        this.router.navigate(['']);
      });
  }
}
