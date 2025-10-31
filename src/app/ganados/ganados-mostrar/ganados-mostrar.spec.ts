import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanadosMostrar } from './ganados-mostrar';

describe('GanadosMostrar', () => {
  let component: GanadosMostrar;
  let fixture: ComponentFixture<GanadosMostrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GanadosMostrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanadosMostrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
