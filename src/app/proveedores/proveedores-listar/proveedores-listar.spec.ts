import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresListar } from './proveedores-listar';

describe('ProveedoresListar', () => {
  let component: ProveedoresListar;
  let fixture: ComponentFixture<ProveedoresListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedoresListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
