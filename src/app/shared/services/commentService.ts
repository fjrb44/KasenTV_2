import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  url: string;

  commentUpload = {
    "text": "Some stupid text"
  }
  

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8000/api/";
  }


  addComment(comment: Comment): Observable<Comment>{
    console.log(this.commentUpload);
    return this.http.post<Comment>(this.url, this.commentUpload, httpOptions);

    // Hechar un vistazo en un futuro
  }
  getCommentsFromVideo(videoId): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url+"video/"+videoId+"/coment");
  }

  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url+"coment/");
  }
}