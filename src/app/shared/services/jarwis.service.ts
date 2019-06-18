import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
  private url: string;

  constructor(private http: HttpClient, private tokenService: TokenService) { 
    this.url = "http://localhost:8000/api/";
  }

  signup(data){
    return this.http.post(this.url+'signup', data);
  }

  login(data){
    return this.http.post(this.url+'login', data);
  }

  sendPasswordResetLink(data){
    return this.http.post(this.url+'sendPasswordResetLink', data);
  }

  changePassword(data){
    return this.http.post(this.url+'resetPassword', data);
  }

  changeUserData(data){
    /*
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.tokenService.get()
    });
    */
    return this.http.post(this.url+'user/edit', data);
  }
}
