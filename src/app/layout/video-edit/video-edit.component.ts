import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { OwnUserService } from 'src/app/shared/services/own-user.service';
import { UserService } from 'src/app/shared/services/user.service';
import { JarwisService } from 'src/app/shared/services/jarwis.service';
import { Video } from 'src/app/video/model/video';
import { VideoService } from 'src/app/shared/services/videoService';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/shared/models/category';
import { TokenService } from 'src/app/shared/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.scss']
})
export class VideoEditComponent implements OnInit {

  public form = {
    imageUrl: null,
    description: null,
    title: null,
    categoryId: 0
  };

  private publicUrl: string;
  private error: [];
  private categories: Category[];

  public imageSrc;
  public userId: number;
  public video: Video;
  public videoId: number;

  constructor(
    private notify: SnotifyService,
    private ownUserService: OwnUserService,
    private videoService: VideoService,
    private categoryService: CategoryService,
    private tokenService: TokenService,
    private route: Router
  ) { }

  ngOnInit() {
    this.error = [];
    this.categories = [];
    this.userId = Number(this.ownUserService.getId());
    this.videoId = this.ownUserService.getActualVideo();
    this.videoService.getVideo(this.videoId).subscribe((data: Video) => {
      this.video = data;
      this.form.title = data.title;
      this.form.description = data.description;
      if(data.categoryId){
        this.form.categoryId = data.categoryId;
      }
    });
    this.categoryService.getCategories().subscribe( (data: Category[]) => this.categories = data);
    this.publicUrl = "http://localhost:8000/storage/";
  }

  onImageSelected(event){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();

      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);

      this.form.imageUrl = <File>event.target.files[0];
    }
  }

  onSubmit(){
    let fd = new FormData;
    this.error = [];

    if(this.form.imageUrl){
      fd.append('imageUrl', this.form.imageUrl);
    }

    if(this.form.title != this.video.title){
      fd.append('title', this.form.title);
    }

    if(this.form.description != this.video.description){
      fd.append('description', this.form.description);
    }

    this.videoService.videoUpdate(fd, this.videoId).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error){
    if(error.error.errors){
      this.error = error.error.errors;
    }else if(error.message){
      this.notify.error("You need to log in");
      this.tokenService.logout();
      this.route.navigateByUrl("/login");
    }
  }
  handleResponse(data){
    if(data.error){
      this.notify.info(data.error, {timeout: 2000});
    }else{
      this.notify.success(data.data);
    }
  }
}
