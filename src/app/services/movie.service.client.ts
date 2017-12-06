import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()
export class MovieServiceClient {
  baseUrl = environment.baseUrl;

  constructor(
    private http: Http,
  ) {}

  api = {
    'createMovie': this.findOrCreateMovie,
    'addMaterial': this.addMaterial,
  };

  findOrCreateMovie(movie) {
    const url = this.baseUrl + '/movie/findOrCreate';
    return this.http.post(url, movie)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  addMaterial(material) {
    const url = this.baseUrl + '/movie/addMaterial';
    return this.http.post(url, material)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  addReview(review) {
    const url = this.baseUrl + '/movie/addReview';
    return this.http.post(url, review)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
