import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresMostrar } from './proveedores-mostrar';

describe('ProveedoresMostrar', () => {
  let component: ProveedoresMostrar;
  let fixture: ComponentFixture<ProveedoresMostrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedoresMostrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresMostrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
