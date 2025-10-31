import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorralesEditar } from './corrales-editar';

describe('CorralesEditar', () => {
  let component: CorralesEditar;
  let fixture: ComponentFixture<CorralesEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorralesEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorralesEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
