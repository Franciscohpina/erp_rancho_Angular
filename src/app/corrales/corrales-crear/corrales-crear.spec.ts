import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorralesCrear } from './corrales-crear';

describe('CorralesCrear', () => {
  let component: CorralesCrear;
  let fixture: ComponentFixture<CorralesCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorralesCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorralesCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
