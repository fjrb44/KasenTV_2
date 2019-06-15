import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8000/api/";
    
  }

  signup(data){
    return this.http.post(this.url+'signup', data);
  }

  login(data){
    return this.http.post(this.url+'login', data);
  }
}
