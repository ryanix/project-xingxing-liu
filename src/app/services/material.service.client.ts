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
    'fingAllMaterialByUserId': this.fingAllMaterialByUserId,
    'findAllMaterialByMovieId': this.findAllMaterialByMovieId,
    'deleteMaterial': this.deleteMaterial,
    'findAllMaterial': this.findAllMaterial,
  }

  findAllMaterial() {
    return this.http.get( this.baseUrl + '/material/findAllMaterial')
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteMaterial(id) {
    const url = this.baseUrl + '/material/deleteMaterial/' + id;
    return this.http.delete(url)
      .map( (res: Response) => {
        return res.json();
      });
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

  findAllMaterialByMovieId(id) {
    const url = this.baseUrl + '/material/findAllMaterialByMovieId/' + id;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  fingAllMaterialByUserId(id) {
    const url = this.baseUrl + '/material/fingAllMaterialByUserId/' + id;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }
}
