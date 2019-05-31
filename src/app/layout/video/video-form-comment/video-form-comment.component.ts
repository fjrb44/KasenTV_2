import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommentService } from 'src/app/shared/services/commentService';

@Component({
  selector: 'app-video-form-comment',
  templateUrl: './video-form-comment.component.html',
  styleUrls: ['./video-form-comment.component.scss']
})
export class VideoFormCommentComponent implements OnInit {

  public form: FormGroup;

  constructor(public fb: FormBuilder,
              private commentService: CommentService) { }

  ngOnInit() {

    this.form = this.fb.group({
      text: new FormControl('', Validators.required)
    });
  }

  onCommentUserVideo() {

    const comment = this.form.value ;
    this.commentService.addComment( comment )
      .subscribe( (receivedComment: any) => {

        console.log( receivedComment );

      });

  }


}
