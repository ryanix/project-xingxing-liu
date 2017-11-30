import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

const baseUrl = environment.baseUrl;

@Injectable()
export class OmdbServiceClient {



  constructor(
    private http: Http,
  ) {}

  searchByTitle(title) {
    return this.http.post(baseUrl + '/movie/searchByName', {searchTerm: title})
      .map((res: Response) => {
        return res.json();
      });
  }
  searchById(id) {
    return this.http.post(baseUrl + '/movie/searchById', {searchId: id})
      .map((res: Response) => {
        return res.json();
      });
  }
  searchPosterTitle(title) {
    return this.http.post(baseUrl + '/movie/posterName', {searchTerm: title})
      .map((res: Response) => {
        return res.json();
      });
  }
  searchPosterId(id) {
    return this.http.post(baseUrl + '/movie/posterId', {searchId: id})
      .map((res: Response) => {
        return res.json();
      });
  }
}
