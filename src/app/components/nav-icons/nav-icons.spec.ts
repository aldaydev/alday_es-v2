import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavIcons } from './nav-icons';

describe('NavIcons', () => {
  let component: NavIcons;
  let fixture: ComponentFixture<NavIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavIcons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
