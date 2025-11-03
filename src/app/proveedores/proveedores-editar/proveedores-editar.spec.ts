import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresEditar } from './proveedores-editar';

describe('ProveedoresEditar', () => {
  let component: ProveedoresEditar;
  let fixture: ComponentFixture<ProveedoresEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedoresEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
