import { Component, OnInit } from '@angular/core';
import {OmdbServiceClient} from '../../../services/omdb.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieDetail: any;
  keys: any;

  constructor(
    private omdbService: OmdbServiceClient,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const id = params['id']
      this.omdbService.searchById(id)
        .subscribe( (u) => {
          this.movieDetail = u;
          this.keys = Object.keys(u);
        });
    });
  }
}
