import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoIframe } from './video-iframe';

describe('VideoIframe', () => {
  let component: VideoIframe;
  let fixture: ComponentFixture<VideoIframe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoIframe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoIframe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
