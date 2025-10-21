import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LechesListar } from './leches-listar';

describe('LechesListar', () => {
  let component: LechesListar;
  let fixture: ComponentFixture<LechesListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LechesListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LechesListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
