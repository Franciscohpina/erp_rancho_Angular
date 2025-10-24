import { TestBed } from '@angular/core/testing';

import { TanquesService } from './tanques-service';

describe('TanquesService', () => {
  let service: TanquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TanquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
