import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazasListar } from './razas-listar';

describe('RazasListar', () => {
  let component: RazasListar;
  let fixture: ComponentFixture<RazasListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RazasListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazasListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
