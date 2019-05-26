import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/video/model/video';
import { VideoService } from 'src/app/shared/services/videoService';

@Component({
  selector: 'app-channel-search',
  templateUrl: './channel-search.component.html',
  styleUrls: ['./channel-search.component.scss']
})
export class ChannelSearchComponent implements OnInit {
  videos: Video[];
  search: string;
  userId: number;

  constructor( 
    private videoService: VideoService, 
    private route: ActivatedRoute, 
    private urlRoute: Router
  ) { }

  ngOnInit() {
    this.search = this.route.snapshot.paramMap.get("search");
    
    let url = this.urlRoute.url;
    url = url.substring( url.indexOf('channel')+8, url.indexOf('/search') );
    
    this.userId = Number(url);

    this.videoService.getUserSearchVideos(this.userId, this.search).subscribe( (data: Video[]) => ( this.videos = data ) );    
  }

}
