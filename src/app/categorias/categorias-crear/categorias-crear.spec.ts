import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasCrear } from './categorias-crear';

describe('CategoriasCrear', () => {
  let component: CategoriasCrear;
  let fixture: ComponentFixture<CategoriasCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
