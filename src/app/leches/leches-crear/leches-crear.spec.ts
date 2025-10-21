import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LechesCrear } from './leches-crear';

describe('LechesCrear', () => {
  let component: LechesCrear;
  let fixture: ComponentFixture<LechesCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LechesCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LechesCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
