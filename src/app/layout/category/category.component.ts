import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/services/videoService';
import { Video } from 'src/app/video/model/video';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  videos: Video[];
  categoryId: number;
  category: Category;

  constructor(
    private videoService: VideoService, 
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.paramMap.get("categoryId"));
    this.categoryService.getCategory(this.categoryId).subscribe( (data: Category) => this.category = data);
    this.videoService.getCategoryVideos(this.categoryId).subscribe( (data: Video[]) => this.videos = data);
  }

}
