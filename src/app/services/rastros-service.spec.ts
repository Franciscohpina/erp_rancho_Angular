import { TestBed } from '@angular/core/testing';

import { RastrosService } from './rastros-service';

describe('RastrosService', () => {
  let service: RastrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RastrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
