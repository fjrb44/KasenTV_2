import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos: string[];

  constructor() { }

  ngOnInit() {
    this.videos = ["Video Test 1", "Video Test 2", "Video Test 3", "Video Test 4", "Video Test 5", "Video Test 6", "Video Test 7", "Video Test 8"];
  }

}
