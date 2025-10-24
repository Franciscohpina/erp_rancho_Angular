import { TestBed } from '@angular/core/testing';

import { GanadosService } from './ganados-service';

describe('GanadosService', () => {
  let service: GanadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GanadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
