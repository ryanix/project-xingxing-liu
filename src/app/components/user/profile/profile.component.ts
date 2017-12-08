import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';
import {MaterialServiceClient} from '../../../services/material.service.client';
import {ReviewServiceClient} from '../../../services/review.service.client';
import {CollectionServiceClient} from '../../../services/collection.service.client';

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

  collection;
  materialList;
  reviewList;
  friendList;

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceClient,
    private materialService: MaterialServiceClient,
    private reviewService: ReviewServiceClient,
    private collectionService: CollectionServiceClient,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    if (this.user) {
      this.userService.findUserById(this.user._id)
        .subscribe(u => {
          this.collection = u.favirates;
          this.friendList = u.friends;
        });
      this.materialService.fingAllMaterialByUserId(this.user._id)
        .subscribe( m => {
          this.materialList = m;
        });
      this.reviewService.fingAllReviewByUserId(this.user._id)
        .subscribe( r => {
          this.reviewList = r;
        });
    }
  }

  logout() {
    this.user = null;
    this.sharedService.user = null;
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

  deleteCollection(c) {
    this.collectionService.deleteCollection(c)
      .subscribe( cr => {
          this.collectionService.findAllCollections(this.user._id)
            .subscribe( r => {
              console.log(r)
              this.collection = r.favirates;
            });
      });
  }

  deleteMaterial(id) {
    this.materialService.deleteMaterial(id)
      .subscribe( u => {
        this.materialService.fingAllMaterialByUserId(this.user._id)
          .subscribe( r => {
            this.materialList = r;
          });
      });
  }

  deleteReview(id) {
    this.reviewService.deleteReview(id)
      .subscribe( u => {
        this.reviewService.fingAllReviewByUserId(this.user._id)
          .subscribe( r => {
            this.reviewList = r;
          });
      });
  }

  deleteFriend(id) {
    this.userService.deleteFriend(this.user._id, id)
      .subscribe( u => {
        console.log('--------------------', u)
        this.userService.findUserById(this.user._id)
          .subscribe( r => {
            console.log('======================', r)
            this.friendList = r.friends;
          });
      });
  }
}
