import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedLogo } from './animated-logo';

describe('AnimatedLogo', () => {
  let component: AnimatedLogo;
  let fixture: ComponentFixture<AnimatedLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
