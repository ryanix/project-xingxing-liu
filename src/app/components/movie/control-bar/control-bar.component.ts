import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service';
import {CollectionServiceClient} from '../../../services/collection.service.client';
import {Router} from '@angular/router';
import {MovieServiceClient} from '../../../services/movie.service.client';
import {MaterialServiceClient} from '../../../services/material.service.client';
import {ReviewServiceClient} from '../../../services/review.service.client';

@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css']
})
export class ControlBarComponent implements OnInit {

  user;
  collection;
  name: String;
  movie;

  material;
  materialContent: String;
  materialVideo: String;
  materialAudio: String;
  materialText: String;

  review;
  reviewContent: String;

  constructor(
    private sharedService: SharedService,
    private collectionService: CollectionServiceClient,
    private router: Router,
    private movieService: MovieServiceClient,
    private materialService: MaterialServiceClient,
    private reviewService: ReviewServiceClient,
  ) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.movie = this.sharedService.movie;
    if (this.user) {
      this.fetchCollections();
      this.addMaterial();
      this.addReview();
    }
  }

  fetchCollections() {
    this.collectionService.findAllCollections(this.user._id)
      .subscribe( result => {
        this.collection = result.favirates;
      });
  }

  creatCollection() {
    const fav = {};
    fav['name'] = this.name;
    fav['dateCreated'] = new Date();
    fav['userId'] = this.user._id;
    this.collectionService.createCollection(fav)
      .subscribe(
        u => {
          this.collectionService.findAllCollections(this.user._id)
            .subscribe(
              result => {
                this.collection = result.favirates;
                this.name = '';
              }
            );
        }
      );
  }

  addToCollection(c) {
    this.movie = this.sharedService.movie;
    this.collectionService.addMovieToCollection(this.movie, c)
      .subscribe(
        result => {
          console.log(result);
          // TODO generate material list post list
        }
      );
  }

  addMaterial() {
    this.movie = this.sharedService.movie;
    const material = this.createMaterial();
    this.materialService.findOrCreate(material)
      .subscribe((u) => {
        this.material = u;
        this.materialContent = u.content ? u.content : '';
        this.materialText = u.text ? u.text : '';
        this.materialAudio = u.audio ? u.audio : '';
        this.materialVideo = u.video ? u.video : '';
        this.movieService.addMaterial(u);
      });
  }

  updateMaterial() {
    this.updateaMaterialValue();
    this.materialService.updateMaterial(this.material)
      .subscribe( u => {
      });
  }
  updateaMaterialValue() {
    this.material['content'] = this.materialContent;
    this.material['video'] = this.materialVideo;
    this.material['audio'] = this.materialAudio;
    this.material['text'] = this.materialText;
  }

  updateReviewValue() {
    this.review['content'] = this.reviewContent;
  }

  updateReview() {
    this.updateReviewValue();
    this.reviewService.updateReview(this.review)
      .subscribe( u => {
      });
  }

  addReview() {
    this.movie = this.sharedService.movie;
    const review = this.createReview();
    this.reviewService.findOrCreate(review)
      .subscribe( (u) => {
        this.review = u;
        this.reviewContent = u.content ? u.content : '';
        this.movieService.addReview(review);
      });

  }

  deleteCollection(c) {
    this.collectionService.deleteCollection(c)
      .subscribe(
        u => {
          this.collectionService.findAllCollections(this.user._id)
            .subscribe(
              result => {
                this.collection = result.favirates;
                this.name = '';
              }
            );
        }
      );
  }

  createMaterial() {
    this.movie = this.sharedService.movie;
    const material = {
      title: this.movie.name,
      movieId: this.movie._id,
      userId: this.user._id,
      content: this.materialContent,
      audio: this.materialAudio,
      video: this.materialVideo,
      text: this.materialText,
      likes: 0,
      dateCreated: new Date()
    };
    return material;
  }

  createReview() {
    this.movie = this.sharedService.movie;
    const review = {
      title: this.movie.name,
      movieId: this.movie._id,
      userId: this.user._id,
      content: this.reviewContent,
      likes: 0,
      dateCreated: new Date(),
    };
    return review;
  }
}
