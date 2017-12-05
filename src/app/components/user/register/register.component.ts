import {Component, OnInit, ViewChild} from '@angular/core';
import {UserServiceClient} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;

  username: String;
  password: String;
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  errorFlag: boolean;
  errorMsg = 'Username already exists~!!';

  constructor(
    private userService: UserServiceClient,
    private sharedService: SharedService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  register() {
    this.userService.findUserByName(this.registerForm.value.username)
      .subscribe((user) => {
        if (user) {
          this.errorFlag = true;
        } else {
          this.errorFlag = false;
          const nuser = {};
          nuser['username'] = this.registerForm.value.username;
          nuser['password'] = this.registerForm.value.password;
          nuser['firstName'] = this.firstName;
          nuser['lastName'] = this.lastName;
          nuser['email'] = this.email;
          nuser['phone'] = this.phone;
          nuser['dateCreated'] = new Date();
          console.log(nuser)
          this.userService.register(nuser)
            .subscribe( (nu) => {
              if (nu) {
                this.sharedService.user = nu;
                this.router.navigate([`/profile`]);
              }
            });
        }
      });
  }

}
