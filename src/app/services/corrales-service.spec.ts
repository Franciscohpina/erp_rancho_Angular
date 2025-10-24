import { TestBed } from '@angular/core/testing';

import { CorralesService } from './corrales-service';

describe('CorralesService', () => {
  let service: CorralesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorralesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
