import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  comments: Comment[];

  constructor() {
    this.comments = [
      {"userId": 1,"videoId": 1, "user":"User 1","comment":"Test comment","upvotes":10,"downvotes":0},
      {"userId": 2,"videoId": 2, "user":"User 2","comment":"Test comment","upvotes":0,"downvotes":0},
      {"userId": 3,"videoId": 3, "user":"User 3","comment":"Test comment","upvotes":0,"downvotes":0},
      {"userId": 4,"videoId": 4, "user":"User 4","comment":"Test comment","upvotes":0,"downvotes":0},
      {"userId": 5,"videoId": 5, "user":"User 5","comment":"Test comment","upvotes":0,"downvotes":0}
    ];
  }

  getCommentsFromVideo(videoId): Comment[]{
    let videoComments: Comment[] = [];

    this.comments.forEach(comment =>{
      if(comment.videoId == videoId){
        videoComments.push(comment);
      }
    });

    return videoComments;
  }
}