import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazasEditar } from './razas-editar';

describe('RazasEditar', () => {
  let component: RazasEditar;
  let fixture: ComponentFixture<RazasEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RazasEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazasEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
