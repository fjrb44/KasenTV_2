import { Injectable } from '@angular/core';
import { Video } from '../../video/model/video';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VideoService {
    videos: Video[];

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
    }

    getVideo(id: number): Observable<Video>{
        return this.http.get<Video>("http://localhost:8000/api/video/"+id);
    }

    getRecomendedVideos(id: number): Observable<Video[]> {
        return this.http.get<Video[]>("http://localhost:8000/api/video/");
    }

    getTendencies(): Observable<Video[]> {
        return this.http.get<Video[]>("http://localhost:8000/api/video/");
    }

    getHomeVideos(): Observable<Video[]> {
        return this.http.get<Video[]>("http://localhost:8000/api/video/");
    }

    getUserVideos(userId: number): Observable<Video[]>{
        return this.http.get<Video[]>("http://localhost:8000/api/video/");
    }
}