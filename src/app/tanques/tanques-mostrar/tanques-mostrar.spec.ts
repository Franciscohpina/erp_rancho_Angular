import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanquesMostrar } from './tanques-mostrar';

describe('TanquesMostrar', () => {
  let component: TanquesMostrar;
  let fixture: ComponentFixture<TanquesMostrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanquesMostrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanquesMostrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
