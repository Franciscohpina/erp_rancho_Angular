import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanquesEditar } from './tanques-editar';

describe('TanquesEditar', () => {
  let component: TanquesEditar;
  let fixture: ComponentFixture<TanquesEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanquesEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanquesEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
