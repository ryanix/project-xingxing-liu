import { Component, OnInit } from '@angular/core';
import {OmdbServiceClient} from '../../../services/omdb.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: String;
  result: any;
  user;
  page = 1;
  constructor(
    private omdbService: OmdbServiceClient,
    private route: ActivatedRoute,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.route.params.subscribe( params => {
       this.title = params['title'];
      this.omdbService.searchByTitle(this.title)
        .subscribe( result => {
          this.result = result.Search;
        });
    });
  }

  searchOnPageNumber(page) {
    if (page <= 1 || page >= 10) {
      return;
    }
    this.page = page;
    this.omdbService.searchByTitleForNextPage(this.title, page)
      .subscribe( movies => {
        this.result = movies.Search;
      });
  }
}
