import { Component, OnInit } from '@angular/core';
import {OmdbServiceClient} from '../../../services/omdb.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {MovieServiceClient} from '../../../services/movie.service.client';
import {ReviewServiceClient} from '../../../services/review.service.client';
import {MaterialServiceClient} from '../../../services/material.service.client';
import {UserServiceClient} from '../../../services/user.service.client';

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
  reviewList;
  materialList;

  errFlag: boolean;
  errMsg = 'Please Login In first.';
  sucFlag: boolean;
  sucMsg = 'Add sucessfully';

  constructor(
    private omdbService: OmdbServiceClient,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private movieService: MovieServiceClient,
    private reviewService: ReviewServiceClient,
    private materialService: MaterialServiceClient,
    private userService: UserServiceClient,
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
              const newId = movie._id;
              this.fetchAllReview(newId);
              this.fetchAllMaterial(newId);
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

  fetchAllReview(id) {
    this.reviewService.findAllReviewByMovieId(id)
      .subscribe( result => {
        this.reviewList = result;
      });
  }

  fetchAllMaterial(id) {
    this.materialService.findAllMaterialByMovieId(id)
      .subscribe( result => {
        this.materialList = result;
      });
  }

  addAsFriend(from) {
    if (!this.sharedService.user) {
      this.errFlag = true;
      this.sucFlag = false;
    } else {
      this.userService.addAsFriend(from, this.sharedService.user._id)
        .subscribe( u => {
          this.errFlag = false;
          this.sucFlag = true;
        });
    }
  }
}
