import { TestBed } from '@angular/core/testing';

import { BrowserState } from './browser-state';

describe('BrowserState', () => {
  let service: BrowserState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
