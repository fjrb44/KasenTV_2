import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/user/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor( private http: HttpClient) { 
    this.url = "http://localhost:8000/api/";
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(this.url+"user/"+id);
  }

  getSearchUsers(search: string): Observable<User[]>{
    return this.http.get<User[]>(this.url+"user/search/"+search);
  }

  getSuscribesUsers(userId: number): Observable<User[]>{
    return this.http.get<User[]>(this.url+"user/"+userId+"/suscriptions");
  }

  getSuscription(userId: number, channelId: number): Observable<any[]>{
    return this.http.get<any[]>(this.url+"user/"+userId+"/channel/"+channelId+"/suscripted");
  }

  suscribe(userId: number, channelId: number): Observable<any>{
    return this.http.post<any>(this.url+"user/channel/"+channelId+'/suscribe', "", { headers: this.headers});
  }

  unsuscribe(userId: number, channelId: number): Observable<any>{
    return this.http.post<any>(this.url+"user/channel/"+channelId+'/unsuscribe', "", { headers: this.headers});
  }
}
