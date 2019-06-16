import { Injectable } from '@angular/core';
import { Video } from '../../video/model/video';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VideoService {
    videos: Video[];
    url: string;
    constructor(private http: HttpClient) {
        // this.videos = this.
        // id: number;
        // created_at?: string;
        // updated_at?: string;
        // description?: string;
        // url: string;
        // imageUrl: string;
        // title: string;
        // userId: number;
        // categoryId?: number;
        this.url = "http://localhost:8000/api/";
    }

    getVideo(id: number): Observable<Video>{
        return this.http.get<Video>(this.url+"videos/"+id);
    }

    getRecomendedVideos(userId: number, videoId: number): Observable<Video[]> {
        return this.http.get<Video[]>(this.url+"user/"+userId+"/recomend/"+videoId);
    }

    getTendencies(): Observable<Video[]> {
        return this.http.get<Video[]>(this.url+"videos/");
    }

    getHomeVideos(userId: number): Observable<Video[]> {
        return this.http.get<Video[]>(this.url+"user/"+userId+"/home");
    }

    getUserVideos(userId: number): Observable<Video[]>{
        return this.http.get<Video[]>(this.url+"user/"+userId+"/videos");
    }

    getSearchVideos(search: string): Observable<Video[]>{
        return this.http.get<Video[]>(this.url+"videos/search/"+search);
    }

    getUserSearchVideos(userId: number, search: string): Observable<Video[]>{
        return this.http.get<Video[]>(this.url+"user/"+userId+"/videos/search/"+search);
    }

    getCategoryVideos(categoryId: number){
        return this.http.get<Video[]>(this.url+"category/"+categoryId+"/videos");
    }

    postNewVideo(userId, url, imageUrl, description, title, categoryId){

        const headers = new HttpHeaders({
            'Content-Type': 'multipart/form-data'
        });
        var dataUpload = {
            "url": url,
            "imageUrl": imageUrl,
            "description": description,
            "title": title,
            "userId": userId,
            "categoryId": categoryId
        };

        return this.http.post('http://localhost:8000/api/user/'+userId+'/newVideo', dataUpload, {
            headers: headers,
            reportProgress: true,
            observe: 'events'
        });
    }
}