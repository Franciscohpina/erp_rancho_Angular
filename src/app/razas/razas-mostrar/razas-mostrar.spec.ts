import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazasMostrar } from './razas-mostrar';

describe('RazasMostrar', () => {
  let component: RazasMostrar;
  let fixture: ComponentFixture<RazasMostrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RazasMostrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazasMostrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
