import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasEditar } from './categorias-editar';

describe('CategoriasEditar', () => {
  let component: CategoriasEditar;
  let fixture: ComponentFixture<CategoriasEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
