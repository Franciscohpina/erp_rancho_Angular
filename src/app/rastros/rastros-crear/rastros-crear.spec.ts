import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastrosCrear } from './rastros-crear';

describe('RastrosCrear', () => {
  let component: RastrosCrear;
  let fixture: ComponentFixture<RastrosCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RastrosCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RastrosCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
