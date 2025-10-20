import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasListar } from './categorias-listar';

describe('CategoriasListar', () => {
  let component: CategoriasListar;
  let fixture: ComponentFixture<CategoriasListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
