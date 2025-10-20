import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorralesListar } from './corrales-listar';

describe('CorralesListar', () => {
  let component: CorralesListar;
  let fixture: ComponentFixture<CorralesListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorralesListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorralesListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
