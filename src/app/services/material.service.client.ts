import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';



@Injectable()
export class MaterialServiceClient {
  baseUrl = environment.baseUrl;

  constructor(
    private http: Http,
  ) {}

  api = {
    'findOrCreate': this.findOrCreate,
    'updateMaterial': this.updateMaterial,
  }

  findOrCreate(material) {
    const url = this.baseUrl + '/material/findOrCreate';
    return this.http.post(url, material)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateMaterial(material) {
    const url = this.baseUrl + '/material/updateMaterial';
    return this.http.put(url, material)
      .map((res: Response) => {
        return res.json();
      });
  }
}
