import { Component, OnInit, ViewChild } from '@angular/core';
import {UserServiceClient} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserServiceClient, private router: Router) { }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    // alert(username + ' ' + password);
    this.userService.login(this.username, this.password)
      .subscribe((u) => {
        if (u) {
          if (Object.getOwnPropertyNames(u).length > 0) {
            if (u.userType === '0') {
              this.router.navigate([`/administrator`]);
            } else {
              this.router.navigate([`/profile`]);
            }
          } else {
            this.errorFlag = true;
          }
        } else {
          this.errorFlag = true;
        }
      });
  }
  ngOnInit() {
  }

}
