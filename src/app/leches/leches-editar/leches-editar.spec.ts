import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LechesEditar } from './leches-editar';

describe('LechesEditar', () => {
  let component: LechesEditar;
  let fixture: ComponentFixture<LechesEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LechesEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LechesEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
