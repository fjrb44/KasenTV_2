import { Injectable } from '@angular/core';
import { Video } from '../../video/model/video';

@Injectable({
    providedIn: 'root',
})
export class VideoService {
    videos: Video[];

    constructor() {
        this.videos = [
            {
                "id": 1,
                "userId": 2,
                "name": "Video Test 1",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 2,
                "userId": 2,
                "name": "Video Test 2",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 3,
                "userId": 2,
                "name": "Video Test 3",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 4,
                "userId": 2,
                "name": "Video Test 4",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 5,
                "userId": 2,
                "name": "Video Test 5",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 6,
                "userId": 2,
                "name": "Video Test 6",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 7,
                "userId": 2,
                "name": "Video Test 7",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 8,
                "userId": 2,
                "name": "Video Test 8",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 11,
                "userId": 1,
                "name": "Username Video 1",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 12,
                "userId": 1,
                "name": "Username Video 2",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 13,
                "userId": 1,
                "name": "Username Video 3",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 14,
                "userId": 1,
                "name": "Username Video 4",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 15,
                "userId": 1,
                "name": "Username Video 5",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 16,
                "userId": 1,
                "name": "Username Video 6",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 17,
                "userId": 1,
                "name": "Username Video 7",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }, {
                "id": 18,
                "userId": 1,
                "name": "Username Video 8",
                "url": "http://techslides.com/demos/sample-videos/small.mp4"
            }
        ];
    }

    getVideo(id: number): Video {
        let video: Video = null;

        for (let i = 0, length = this.videos.length; i < length && !video; i++) {
            if (this.videos[i].id == id) {
                video = this.videos[i];
            }
        }

        return video;
    }

    getRecomendedVideos(id: number): Video[] {
        let recomendedVideos: Video[] = [];

        for (let i = 0, length = this.videos.length; i < length && recomendedVideos.length <= 4; i++) {
            if (this.videos[i].id != id) {
                recomendedVideos.push(this.videos[i]);
            }
        }

        return recomendedVideos;
    }

    getTendencies(): Video[] {
        let tendencies: Video[] = [];

        for (let i = 4, length = this.videos.length; i < length; i++) {
            tendencies.push(this.videos[i]);
        }
        return tendencies;
    }

    getHomeVideos(): Video[] {
        return this.videos;
    }

    getUserVideos(userId: number): Video[]{
        let userVideos: Video[] = [];

        this.videos.forEach(video => {
            if(video.userId == userId){
                userVideos.push(video);
            }
        });
        
        return userVideos;
    }
}