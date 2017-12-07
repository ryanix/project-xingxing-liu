import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

const baseUrl = environment.baseUrl;

@Injectable()
export class CollectionServiceClient {

  constructor(
    private http: Http,
  ) {}

  api = {
    'createCollection': this.createCollection,
    'findAllCollections': this.findAllCollections,
    'fetchAllCollection': this.fetchAllCollection,
    'deleteCollection': this.deleteCollection,
    'addMovieToCollection': this.addMovieToCollection,
    'removeMovieFromCollection': this.removeMovieFromCollection,
    'findCollectoinDetail': this.findCollectoinDetail,
  };

  fetchAllCollection() {
    return this.http.get( baseUrl + '/collection/fetchAllCollection')
      .map( (res: Response) => {
        return res.json();
      });
  }

  createCollection(fav) {
    const url = baseUrl + '/collection/create';
    return this.http.post(url, fav)
      .map((res: Response) => {
        return res.json();
      });
  }

  findAllCollections(userId) {
    const url = baseUrl + '/collection/findAllCollection/' + userId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteCollection(c) {
    const url = baseUrl + '/collection/deleteCollection/' + c._id;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  addMovieToCollection(movie, c) {
    const url = baseUrl + '/collection/addMovieToCollection/' + c._id;
    return this.http.post(url, movie)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  removeMovieFromCollection(mid, cid) {
    const url = baseUrl + '/collection/removeMovieFromCollection/';
    return this.http.post(url, {movie: mid, collection: cid})
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findCollectoinDetail(id) {
    const url = baseUrl + '/collection/findCollectionDetail/' + id;
    return this.http.get(url)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
