import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanquesCrear } from './tanques-crear';

describe('TanquesCrear', () => {
  let component: TanquesCrear;
  let fixture: ComponentFixture<TanquesCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanquesCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanquesCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
