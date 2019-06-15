import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/shared/models/category';
import { OwnUserService } from 'src/app/shared/services/own-user.service';

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

  constructor(
    private http: HttpClient, 
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private ownUserService: OwnUserService
  ) { }

  ngOnInit() {
    this.video = null;
    this.image = null;

    this.categoryService.getCategories().subscribe( (data: Category[]) => this.categories = data);

    this.form = this.fb.group({
      text: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(255)])
    });

    this.userId = Number(this.ownUserService.getId());
  }

  onVideoSelected(event){
    this.video = <File>event.target.files[0];
  }

  onImageSelected(event){
    this.image = <File>event.target.files[0];
  }

  onUpload() {
    var fd = new FormData;

    fd.append('url', this.video);
    fd.append('imageUrl', this.image);
    fd.append('title', 'Hola mundo');
    fd.append('description', 'Hola mundo, este es el primer video');
    fd.append('userId', '1');
    fd.append('categoryId', '1');
    /*
    let fd = {
      'description': "aasdf",
      "url": this.video,
      "imageUrl": this.image,
      "title": "Asdfg",
      "userId": "1",
      "categoryId": "1"
    }
    */
    // var options = { content: fd };
    
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });

    this.http.post('http://localhost:8000/api/user/'+this.userId+'/newVideo', fd, {
      headers: headers,
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('Upload progress: ' + Math.round(event.loaded / event.total * 100) + '%');
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    });
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