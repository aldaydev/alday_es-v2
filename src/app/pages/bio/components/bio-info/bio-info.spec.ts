import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioInfo } from './bio-info';

describe('BioInfo', () => {
  let component: BioInfo;
  let fixture: ComponentFixture<BioInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
