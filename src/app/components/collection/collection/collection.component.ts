import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {CollectionServiceClient} from '../../../services/collection.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collection;
  user;
  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    private collectionService: CollectionServiceClient,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.route.params.subscribe( params => {
      const id = params['cid'];
      this.collectionService.findCollectoinDetail(id)
        .subscribe(
          result => {
            this.collection = result;
          }
        );
    });
  }

  deleteCollection() {
    this.collectionService.deleteCollection(this.collection)
      .subscribe(
        result => {
          this._location.back();
        }
      );
  }

  removeMovieFromCollection(mid) {
    this.collectionService.removeMovieFromCollection(mid, this.collection._id)
      .subscribe( result => {
        this.collection = result;
      });
  }
}
