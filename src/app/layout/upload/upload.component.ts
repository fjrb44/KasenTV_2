import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/shared/models/category';
import { OwnUserService } from 'src/app/shared/services/own-user.service';
import { VideoService } from 'src/app/shared/services/videoService';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  video: File;
  image: File;
  form: FormGroup;
  categories: Category[];
  userId: number;

  form2 = {
    url: null,
    imageUrl: null,
    description: null,
    title: null,
    userId: null,
    categoryId: null
  }

  constructor(
    private http: HttpClient, 
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private ownUserService: OwnUserService,
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.video = null;
    this.image = null;

    this.categoryService.getCategories().subscribe( (data: Category[]) => this.categories = data);

    this.form = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]),
      descripcion: new FormControl('', [Validators.required]),
      url: new FormControl(''),
      imageUrl: new FormControl('')
    });

    this.userId = Number(this.ownUserService.getId());
  }

  onVideoSelected(event){
    // this.video = <File>event.target.files[0];
    const file = event.target.files[0];
    this.form.get('url').setValue(file);
  }

  onImageSelected(event){
    this.image = <File>event.target.files[0];
  }

  onUpload() {
    /*
    var fd = new FormData;
    
    fd.append('url', 'asdf');
    fd.append('imageUrl', 'this.image');
    fd.append('title', 'Hola mundo');
    fd.append('description', 'Hola mundo, este es el primer video');
    fd.append('userId', '1');
    fd.append('categoryId', '1');
    */
    var fd = {
      'url': 'Null',
      'imageUrl': 'Null',
      'description': 'Null',
      'title': 'Null',
      'userId': 1,
      'categoryId': 1
    }


    /*
    this.form2.url = this.video;
    this.form2.imageUrl = this.image;
    this.form2.title = "Prueba grande y fuerte";
    this.form2.description = "Otra descripcion de mierda";
    this.form2.userId = this.userId;
    this.form2.categoryId = 1;
    */

    console.log(this.form.get('url').value);
    
    this.videoService.postNewVideo(this.userId, 'null URL', 'null ImageUrl', 'Null Description', 'Null title', 1).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('Upload progress: ' + Math.round(event.loaded / event.total * 100) + '%');
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    }, error => console.log(error));
  }

  a(event: MouseEvent){
    event.preventDefault();

    this.onUpload();
  }
}

/*
"description" => ["max:2000"],
"url" => ["required", "mimes:mp4,mov,ogg"],
"imageUrl" => ["required", "image", "mimes:jpg,jpeg,png,gif,webp"],
"title" => ["required","min:4", "max:100"],
"userId" => ["required", "numeric"],
"categoryId" =>["numeric"]
*/