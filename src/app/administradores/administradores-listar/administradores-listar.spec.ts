import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradoresListar } from './administradores-listar';

describe('AdministradoresListar', () => {
  let component: AdministradoresListar;
  let fixture: ComponentFixture<AdministradoresListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradoresListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradoresListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
