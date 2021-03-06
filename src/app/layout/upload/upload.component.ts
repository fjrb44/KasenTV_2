import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/shared/models/category';
import { OwnUserService } from 'src/app/shared/services/own-user.service';
import { VideoService } from 'src/app/shared/services/videoService';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  categories: Category[];
  userId: number;

  public form = {
    url: null,
    imageUrl: null,
    description: null,
    title: null,
    userId: null,
    categoryId: null
  };

  public imageSrc;
  public videoSrc;
  public error = [];
  public percentage: number;
  public unableSubmit: boolean;

  constructor(
    private categoryService: CategoryService,
    private ownUserService: OwnUserService,
    private videoService: VideoService,
    private router: Router,
    private auth: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe( (data: boolean) => {

      if(!data){
        this.router.navigateByUrl("/login");
      }
    });

    this.percentage = 0;
    this.form.categoryId = 0;
    this.unableSubmit = false;
    
    this.categoryService.getCategories().subscribe( (data: Category[]) => this.categories = data);
    this.userId = Number(this.ownUserService.getId());
  }

  onVideoSelected(event){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();

      reader.onload = e => this.videoSrc = reader.result;

      reader.readAsDataURL(file);

      this.form.url = <File>event.target.files[0];
    }
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

  onSubmit() {
    var fd = new FormData;
    this.error = [];
    this.unableSubmit = true;
    
    fd.append('url', this.form.url);
    fd.append('imageUrl', this.form.imageUrl);
    fd.append('title', this.form.title);
    fd.append('description', this.form.description);
    fd.append('userId', this.userId+'');

    if(this.form.categoryId != 0){
      fd.append('categoryId', this.form.categoryId);
    }
    
    this.videoService.postNewVideo(this.userId, fd).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.percentage = Math.round(event.loaded / event.total * 100);
      } else if (event.type === HttpEventType.Response) {
        if(event.body){
          var data: any = event.body;

          if(data.data.id){
            this.router.navigateByUrl("/video/"+data.data.id);
          }
        }
      }
    }, error => this.handleError(error));
  }

  handleError(error){
    if(error.message){
      this.auth.changeStatus(false);
      this.tokenService.logout();
      this.router.navigateByUrl("/login");
    }else{
      this.unableSubmit = false;
      this.percentage = 0;
      this.error = error.error.errors;
    }
  }
}