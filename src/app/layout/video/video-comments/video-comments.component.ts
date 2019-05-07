import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment';

@Component({
  selector: 'app-video-comments',
  templateUrl: './video-comments.component.html',
  styleUrls: ['./video-comments.component.scss']
})
export class VideoCommentsComponent implements OnInit {
  comments: Comment[];


  constructor() { }

  ngOnInit() {
    this.comments = [
      {"user":"User 1","comment":"Test comment","upvotes":10,"downvotes":0},
      {"user":"User 2","comment":"Test comment","upvotes":0,"downvotes":0},
      {"user":"User 3","comment":"Test comment","upvotes":0,"downvotes":0},
      {"user":"User 4","comment":"Test comment","upvotes":0,"downvotes":0},
      {"user":"User 5","comment":"Test comment","upvotes":0,"downvotes":0}
    ];
  }

  upvote(comment: Comment){
    comment.upvotes += 1;
  }

  downvote(comment: Comment){
    comment.upvotes -= 1;
  }
}
