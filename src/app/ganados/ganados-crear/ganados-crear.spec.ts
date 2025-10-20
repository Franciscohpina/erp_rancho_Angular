import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanadosCrear } from './ganados-crear';

describe('GanadosCrear', () => {
  let component: GanadosCrear;
  let fixture: ComponentFixture<GanadosCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GanadosCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanadosCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
