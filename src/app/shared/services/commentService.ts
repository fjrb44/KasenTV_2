import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CommentService {
  url: string;

  commentUpload = {
    'text': 'Some stupid text'
  };


  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8000/api';
  }


  addComment(comment: Comment): Observable<Comment> {
    console.log(comment);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
        'App-Version': '1',
      })
    };

    return this.http.post<Comment>(this.url + '/user/1/videos/1/newComment', comment, httpOptions);
    // Hechar un vistazo en un futuro

  }


  getCommentsFromVideo(videoId): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url + '/videos/' + videoId + '/comments');
  }

  /*
  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url+"coment/");
  }
  */
}
