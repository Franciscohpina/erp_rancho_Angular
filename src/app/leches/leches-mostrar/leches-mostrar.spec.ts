import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LechesMostrar } from './leches-mostrar';

describe('LechesMostrar', () => {
  let component: LechesMostrar;
  let fixture: ComponentFixture<LechesMostrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LechesMostrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LechesMostrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
