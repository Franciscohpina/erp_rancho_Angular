import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastrosListar } from './rastros-listar';

describe('RastrosListar', () => {
  let component: RastrosListar;
  let fixture: ComponentFixture<RastrosListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RastrosListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RastrosListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
