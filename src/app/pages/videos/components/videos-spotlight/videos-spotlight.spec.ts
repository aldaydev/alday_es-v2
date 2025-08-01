import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosSpotlight } from './videos-spotlight';

describe('VideosSpotlight', () => {
  let component: VideosSpotlight;
  let fixture: ComponentFixture<VideosSpotlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosSpotlight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosSpotlight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
