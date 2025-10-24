import { TestBed } from '@angular/core/testing';

import { LechesService } from './leches-service';

describe('LechesService', () => {
  let service: LechesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LechesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
