import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSpotlight } from './projects-spotlight';

describe('Spotlight', () => {
  let component: ProjectsSpotlight;
  let fixture: ComponentFixture<ProjectsSpotlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsSpotlight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsSpotlight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
