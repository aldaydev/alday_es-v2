import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioSpotlight } from './bio-spotlight';

describe('BioSpotlight', () => {
  let component: BioSpotlight;
  let fixture: ComponentFixture<BioSpotlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioSpotlight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioSpotlight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
