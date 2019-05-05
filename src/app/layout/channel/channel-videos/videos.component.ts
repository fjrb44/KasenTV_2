import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class ChannelVideosComponent implements OnInit {
  videos: string[];

  constructor() { }

  ngOnInit() {
    this.videos = ["Username 1 Video Player", "Username 2 Video Player", "Username 3 Video Player","Username 4 Video Player", "Username 5 Video Player"]
  }

}
