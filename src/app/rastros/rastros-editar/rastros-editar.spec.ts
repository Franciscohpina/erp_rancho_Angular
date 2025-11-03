import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastrosEditar } from './rastros-editar';

describe('RastrosEditar', () => {
  let component: RastrosEditar;
  let fixture: ComponentFixture<RastrosEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RastrosEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RastrosEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
