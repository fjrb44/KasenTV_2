import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-tendencies',
  templateUrl: './tendencies.component.html',
  styleUrls: ['./tendencies.component.scss'],
  animations: [routerTransition()]
})
export class TendenciesComponent implements OnInit {
  videos: string[];

  constructor() { }

  ngOnInit() {
    this.videos = ["Video Test 1", "Video Test 2", "Video Test 3", "Video Test 4", "Video Test 5", "Video Test 6", "Video Test 7", "Video Test 8"];
  }

}