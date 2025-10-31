import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorralesMostrar } from './corrales-mostrar';

describe('CorralesMostrar', () => {
  let component: CorralesMostrar;
  let fixture: ComponentFixture<CorralesMostrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorralesMostrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorralesMostrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
