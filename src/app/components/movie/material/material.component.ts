import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  movie;
  user;
  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.movie = this.sharedService.movie;
    this.user = this.sharedService.user;
  }

}
