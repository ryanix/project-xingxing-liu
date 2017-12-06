import { Component, OnInit } from '@angular/core';
import {OmdbServiceClient} from '../../../services/omdb.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieDetail: any;
  keys: any;
  title;

  constructor(
    private omdbService: OmdbServiceClient,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.title = params['title']
      const id = params['id']
      this.omdbService.searchById(id)
        .subscribe( (u) => {
          this.movieDetail = u;
          this.keys = Object.keys(u);
          this.sharedService.movie = u;
        });
    });
  }
}
