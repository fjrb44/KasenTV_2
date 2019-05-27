import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/video/model/video';
import { VideoService } from 'src/app/shared/services/videoService';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user/model/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  videos: Video[];
  searchField: string;
  users: User[];

  constructor(
    private videoService: VideoService, 
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.searchField = this.route.snapshot.paramMap.get("searchField");
    this.videoService.getSearchVideos(this.searchField).subscribe( (data: Video[]) => ( this.videos = data ) );
    this.userService.getSearchUsers(this.searchField).subscribe( (data: User[]) => this.users = data);
  }

}
