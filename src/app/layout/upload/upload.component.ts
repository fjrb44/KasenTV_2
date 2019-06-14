import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  file: File;
  form: FormGroup;
  categories: Category[];
  
  constructor(
    private http: HttpClient, 
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.file = null;
    this.categoryService.getCategories().subscribe( (data: Category[]) => this.categories = data);
  }

  onFileSelected(event){
    this.file = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData;
    fd.append('image', this.file, this.file.name);


    this.http.post('somewhere', fd, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('Upload progress: ' + Math.round(event.loaded / event.total * 100) + '%');
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    })
    console.log(fd);
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