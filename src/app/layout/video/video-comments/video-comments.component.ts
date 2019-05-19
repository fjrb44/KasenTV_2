import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment';
import { CommentService } from 'src/app/shared/services/commentService';

@Component({
  selector: 'app-video-comments',
  templateUrl: './video-comments.component.html',
  styleUrls: ['./video-comments.component.scss']
})
export class VideoCommentsComponent implements OnInit {
  @Input("videoId") videoId: number;
  comments: Comment[];


  constructor( private commentService: CommentService ) { }

  ngOnInit() {
    this.commentService.getCommentsFromVideo(this.videoId).subscribe((data: Comment[]) => this.comments = data);
  }

  upvote(comment: Comment){
    comment.upvotes += 1;
  }

  downvote(comment: Comment){
    comment.upvotes -= 1;
  }
}
