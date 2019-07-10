import { TestBed } from '@angular/core/testing';

import { RollService } from './roll.service';

describe('RollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RollService = TestBed.get(RollService);
    expect(service).toBeTruthy();
  });
});
