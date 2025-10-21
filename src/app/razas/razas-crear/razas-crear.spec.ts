import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazasCrear } from './razas-crear';

describe('RazasCrear', () => {
  let component: RazasCrear;
  let fixture: ComponentFixture<RazasCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RazasCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazasCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
