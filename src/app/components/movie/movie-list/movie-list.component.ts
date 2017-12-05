import { Component, OnInit } from '@angular/core';
import {OmdbServiceClient} from '../../../services/omdb.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  result: any;

  constructor(
    private omdbService: OmdbServiceClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const title = params['title'];
      this.omdbService.searchByTitle(title)
        .subscribe( result => {
          console.log(result)
          this.result = result.Search;
        });
    });
  }

}
