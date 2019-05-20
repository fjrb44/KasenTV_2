import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/video/model/video';
import { VideoService } from 'src/app/shared/services/videoService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  videos: Video[];
  searchField: string;

  constructor(private videoService: VideoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchField = this.route.snapshot.paramMap.get("searchField");
    this.videoService.getSearchVideos(this.searchField).subscribe( (data: Video[]) => ( this.videos = data ) );    
  }

}
