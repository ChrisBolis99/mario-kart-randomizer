import { TestBed } from '@angular/core/testing';

import { Track } from './track';

describe('Track', () => {
  let service: Track;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Track);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
