import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanadosListar } from './ganados-listar';

describe('GanadosListar', () => {
  let component: GanadosListar;
  let fixture: ComponentFixture<GanadosListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GanadosListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanadosListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
