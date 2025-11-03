import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastrosMostrar } from './rastros-mostrar';

describe('RastrosMostrar', () => {
  let component: RastrosMostrar;
  let fixture: ComponentFixture<RastrosMostrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RastrosMostrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RastrosMostrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
