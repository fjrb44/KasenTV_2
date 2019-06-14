import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscribeButtonComponent } from './suscribe-button.component';

describe('SuscribeButtonComponent', () => {
  let component: SuscribeButtonComponent;
  let fixture: ComponentFixture<SuscribeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuscribeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscribeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
