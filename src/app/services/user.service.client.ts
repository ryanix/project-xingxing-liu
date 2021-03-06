import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service';

const baseUrl = environment.baseUrl;

@Injectable()
export class UserServiceClient {
  constructor(
    private http: Http,
    private router: Router,
    private sharedService: SharedService,
  ) {}

  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  api = {
    'findUserByName': this.findUserByName,
    'login': this.login,
    'register': this.register,
    'adminLoggedIn': this.adminLoggedIn,
    'loggedIn': this.loggedIn,
    'logout': this.logout,
    'findAllUsers': this.findAllUsers,
    'findUserById': this.findUserById,
    'addAsFriend': this.addAsFriend,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser,
    'findAllFriends': this.findAllFriends,
    'deleteFriend': this.deleteFriend,
  };

  deleteFriend(fid, did) {
    return this.http.post(this.baseUrl + '/api/user/deleteFriend', {from: fid, deleted: did})
      .map( (res: Response) => {
        return res.json();
      });
  }

  findAllFriends(uid) {
    return this.http.get(this.baseUrl + '/api/user/findUserById/' + uid)
      .map( (res: Response) => {
        return res.json();
      });
  }

  login(username: String, password: String) {
    this.options.withCredentials = true;

    const body = {
      username: username,
      password: password,
    };

    return this.http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findUserByName(username) {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/findUserByName', {username: username})
      .map((res: Response) => {
        return res.json();
      });
  }

  register(user) {
    this.options.withCredentials = true;
    return this.http.post( this.baseUrl + '/api/register', user, this.options)
      .map((res: Response) => {
        return res.json();
      });
  }

  adminLoggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if ( user !== 0 && user.userType === '0') {
            this.sharedService.user = user;
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if ( user !== 0 ) {
            this.sharedService.user = user;
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (status) => {
          return status;
        }
      );
  }

  updateUser(userId, user) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findAllUsers() {
    const url = this.baseUrl + '/api/users';
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  addAsFriend(from, to) {
    const url = this.baseUrl + '/api/user/addAsFriend';
    return this.http.post(url, {from: from, to: to})
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findUserById(id) {
    const url = this.baseUrl + '/api/user/findUserById/' + id;
    return this.http.get(url)
      .map( (res: Response) => {
        return res.json();
      });
  }
}
