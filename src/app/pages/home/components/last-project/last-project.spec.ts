import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastProject } from './last-project';

describe('LastProject', () => {
  let component: LastProject;
  let fixture: ComponentFixture<LastProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
