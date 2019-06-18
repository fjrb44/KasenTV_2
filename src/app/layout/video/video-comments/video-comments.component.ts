import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment';
import { CommentService } from 'src/app/shared/services/commentService';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { OwnUserService } from 'src/app/shared/services/own-user.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SnotifyService } from 'ng-snotify';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/user/model/user';

@Component({
  selector: 'app-video-comments',
  templateUrl: './video-comments.component.html',
  styleUrls: ['./video-comments.component.scss']
})
export class VideoCommentsComponent implements OnInit {
  @Input("videoId") videoId: number;
  comments: Comment[];
  public form: FormGroup;
  public userId: number;
  public isLogged: boolean;
  public wait;
  public imageUrl: string;
  public publicUrl: string;

  constructor( 
    private commentService: CommentService, 
    public fb: FormBuilder, 
    private ownUserService: OwnUserService,
    private authService: AuthService,
    private notify: SnotifyService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.publicUrl = "http://localhost:8000/storage/";
    this.authService.authStatus.subscribe( (data: boolean) => this.isLogged = data);
    
    this.userId = this.ownUserService.getId();

    if(this.userId != 0){
      this.userService.getUser(this.userId).subscribe( (data: User) => this.imageUrl = data.logo);
    }
    this.loadComments();
    this.form = this.fb.group({
      text: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(255)])
    });
  }

  loadComments(){
    this.commentService.getCommentsFromVideo(this.videoId).subscribe((data: Comment[]) => this.comments = data);
  }

  onCommentUserVideo() {
    this.wait = this.notify.info('Wait...', {timeout: 5000});

    this.commentService.addComment( this.text.value, this.userId )
      .subscribe( (data: any) => {
        this.notify.remove(this.wait.id);
        this.notify.success("Your comment has succesfully upload.");
        this.loadComments();
      }, (error) =>{
        this.notify.remove(this.wait.id);
        this.notify.error('There was an error');
        console.log(error);
      });
      
    this.form.reset();
  }

  get text(){
    return this.form.get("text");
  }
}
