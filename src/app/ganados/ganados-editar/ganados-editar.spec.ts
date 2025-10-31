import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanadosEditar } from './ganados-editar';

describe('GanadosEditar', () => {
  let component: GanadosEditar;
  let fixture: ComponentFixture<GanadosEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GanadosEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanadosEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
