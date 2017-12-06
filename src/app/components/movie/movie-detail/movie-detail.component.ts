import { Component, OnInit } from '@angular/core';
import {OmdbServiceClient} from '../../../services/omdb.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {MovieServiceClient} from '../../../services/movie.service.client';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieDetail: any;
  keys: any;
  title;
  newM;
  movieReady;

  constructor(
    private omdbService: OmdbServiceClient,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private movieService: MovieServiceClient,
    ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.title = params['title'];
      const id = params['id'];
      this.omdbService.searchById(id)
        .subscribe( (u) => {
          this.movieDetail = u;
          this.keys = Object.keys(u);
           this.newM = this.createNewMovie(u);
          this.movieService.findOrCreateMovie(this.newM)
            .subscribe( movie => {
              this.sharedService.movie = movie;
              this.movieReady = movie;
            });
        });
    });
  }

   createNewMovie(movie) {
    const newM = {};
    newM['name'] = movie.Title;
    newM['omdbId'] = movie.imdbID;
    newM['dateCreated'] = new Date();
    return newM;
  }
}
