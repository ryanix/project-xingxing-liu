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
    'findAllReviewByMovieId': this.findAllReviewByMovieId,
    'fingAllReviewByUserId': this.fingAllReviewByUserId,
    'deleteReview': this.deleteReview,
    'findAllReview': this.findAllReview,
  };

  findAllReview() {
    return this.http.get( this.baseUrl + '/review/findAllReview')
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteReview(id) {
    const url = this.baseUrl + '/review/deleteReview/' + id;
    return this.http.delete(url)
      .map((res: Response) => {
        return res.json();
      });
  }

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

  findAllReviewByMovieId(id) {
    const url = this.baseUrl + '/review/findAllReviewByMovieId/' + id;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  fingAllReviewByUserId(id) {
    const url = this.baseUrl + '/review/fingAllReviewByUserId/' + id;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

}
