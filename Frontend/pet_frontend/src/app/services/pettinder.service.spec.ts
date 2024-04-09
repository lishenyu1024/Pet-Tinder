import { TestBed } from '@angular/core/testing';

import { PettinderService } from './pettinder.service';

describe('PettinderService', () => {
  let service: PettinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PettinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
