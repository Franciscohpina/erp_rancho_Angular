import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradoresMostrar } from './administradores-mostrar';

describe('AdministradoresMostrar', () => {
  let component: AdministradoresMostrar;
  let fixture: ComponentFixture<AdministradoresMostrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradoresMostrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradoresMostrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
