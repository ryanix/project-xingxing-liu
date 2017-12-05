import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user;
  keys;
  importantIndex = ['_id', 'password', '__v', 'userType', 'friends', 'favirates']
  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.keys = Object.keys(this.user);
  }

}
