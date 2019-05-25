import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoThumbNailComponent } from './video-thumb-nail.component';

describe('VideoThumbNailComponent', () => {
  let component: VideoThumbNailComponent;
  let fixture: ComponentFixture<VideoThumbNailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoThumbNailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoThumbNailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
