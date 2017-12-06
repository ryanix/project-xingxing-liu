import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';



@Injectable()
export class ReviewServiceClient {
  baseUrl = environment.baseUrl;

  constructor(
    private http: Http,
  ) {}

  api = {
    'findOrCreate': this.findOrCreate,
    'updateReview': this.updateReview,
  };

  findOrCreate(review) {
    const url = this.baseUrl + '/review/findOrCreate';
    return this.http.post(url, review)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateReview(review) {
    const url = this.baseUrl + '/review/updateReview';
    return this.http.put(url, review)
      .map( (res: Response) => {
        return res.json();
      });
  }
}
