import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { commentUpload } from '../models/commentUpload';
import { OwnUserService } from './own-user.service';


@Injectable({
  providedIn: 'root',
})
export class CommentService {
  url: string;

  constructor(private http: HttpClient, private ownUserService: OwnUserService) {
    this.url = 'http://localhost:8000/api';
  }


  addComment(comment: string): Observable<Comment> {
    if(!this.ownUserService.isLogged()){
      return;
    }
    let videoId = this.ownUserService.getActualVideo();

    if(!videoId){
      return;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    var user = this.ownUserService.getId();

    var commentUpload: commentUpload = {
      'text': comment
    };

    return this.http.post<Comment>(this.url + '/user/'+user+'/videos/'+videoId+'/newComment', commentUpload, { headers: headers});
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
