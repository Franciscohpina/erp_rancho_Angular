import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresCrear } from './proveedores-crear';

describe('ProveedoresCrear', () => {
  let component: ProveedoresCrear;
  let fixture: ComponentFixture<ProveedoresCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedoresCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
