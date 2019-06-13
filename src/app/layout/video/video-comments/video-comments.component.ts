import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment';
import { CommentService } from 'src/app/shared/services/commentService';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-video-comments',
  templateUrl: './video-comments.component.html',
  styleUrls: ['./video-comments.component.scss']
})
export class VideoCommentsComponent implements OnInit {
  @Input("videoId") videoId: number;
  comments: Comment[];
  public form: FormGroup;

  constructor( private commentService: CommentService, public fb: FormBuilder ) { }

  ngOnInit() {
    this.loadComments();
    this.form = this.fb.group({
      text: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(255)])
    });
  }

  loadComments(){
    this.commentService.getCommentsFromVideo(this.videoId).subscribe((data: Comment[]) => this.comments = data);
  }

  onCommentUserVideo() {
    this.commentService.addComment( this.text.value )
      .subscribe( (receivedComment: any) => {
        this.loadComments();
      }, (error) =>{
        console.log(error);
      });

  }

  get text(){
    return this.form.get("text");
  }
}
