import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasMostrar } from './categorias-mostrar';

describe('CategoriasMostrar', () => {
  let component: CategoriasMostrar;
  let fixture: ComponentFixture<CategoriasMostrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasMostrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasMostrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
