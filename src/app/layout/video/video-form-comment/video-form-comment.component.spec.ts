import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFormCommentComponent } from './video-form-comment.component';

describe('VideoFormCommentComponent', () => {
  let component: VideoFormCommentComponent;
  let fixture: ComponentFixture<VideoFormCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFormCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFormCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
