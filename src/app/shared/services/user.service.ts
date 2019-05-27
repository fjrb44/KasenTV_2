import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/user/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;

  constructor( private http: HttpClient) { 
    this.url = "http://localhost:8000/api/";
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(this.url+"user/"+id);
  }

  getSearchUsers(search: string): Observable<User[]>{
    return this.http.get<User[]>(this.url+"user/search/"+search);
  }
}
