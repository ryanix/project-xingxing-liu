import { Component, OnInit } from '@angular/core';
import {OmdbServiceClient} from '../../services/omdb.service.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = '';
  id = '';
  title1 = '';
  id1 = '';
  result: any;
  movie: any;
  keys: any;
  constructor(private omdbService: OmdbServiceClient) { }

  ngOnInit() {
  }

  search1() {
    this.movie = null;
    this.omdbService.searchByTitle(this.title)
      .subscribe((u) => {
        this.result = u.Search;
      });
  }

  searchAfterClick(id) {
    this.id = id;
    this.search2();
  }

  search2() {
    this.omdbService.searchById(this.id)
      .subscribe((u) => {
        this.movie = u;
        this.keys = Object.keys(u);
      });
  }

  search3() {
    this.omdbService.searchPosterTitle(this.title1)
      .subscribe((u) => {
        this.result = u.Search;
      });
  }

  search4() {
    this.omdbService.searchPosterId(this.id1)
      .subscribe((u) => {
        this.result = u.Search;
      });
  }

}
