import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradoresCrear } from './administradores-crear';

describe('AdministradoresCrear', () => {
  let component: AdministradoresCrear;
  let fixture: ComponentFixture<AdministradoresCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradoresCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradoresCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
