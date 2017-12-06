import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service';
import {CollectionServiceClient} from '../../../services/collection.service.client';
import {UserServiceClient} from '../../../services/user.service.client';
import {Router} from '@angular/router';

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
  constructor(
    private sharedService: SharedService,
    private collectionService: CollectionServiceClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.movie = this.sharedService.movie;
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
    this.collectionService.addMovieToCollection(this.movie, c)
      .subscribe(
        result => {
          console.log(result)
        }
      );
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
}
