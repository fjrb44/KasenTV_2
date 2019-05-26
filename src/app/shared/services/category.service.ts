import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8000/api/";
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url+"category/");
  }
}
