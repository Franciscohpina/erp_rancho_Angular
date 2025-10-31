import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradoresEditar } from './administradores-editar';

describe('AdministradoresEditar', () => {
  let component: AdministradoresEditar;
  let fixture: ComponentFixture<AdministradoresEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradoresEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradoresEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
