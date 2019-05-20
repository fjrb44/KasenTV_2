import { Injectable } from '@angular/core';
import { Video } from '../../video/model/video';
import { HttpClient } from '@angular/common/http';
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
        return this.http.get<Video[]>(this.url+userId+"/videos/"+videoId);
    }

    getTendencies(): Observable<Video[]> {
        return this.http.get<Video[]>(this.url+"videos/");
    }

    getHomeVideos(userId: number): Observable<Video[]> {
        return this.http.get<Video[]>(this.url+userId+"/videos");
    }

    getUserVideos(userId: number): Observable<Video[]>{
        return this.http.get<Video[]>(this.url+"user/"+userId+"/videos");
    }

    getSearchVideos(search: string): Observable<Video[]>{
        return this.http.get<Video[]>(this.url+"videos/search/"+search);
    }
}