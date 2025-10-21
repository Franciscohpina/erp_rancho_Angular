import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanquesListar } from './tanques-listar';

describe('TanquesListar', () => {
  let component: TanquesListar;
  let fixture: ComponentFixture<TanquesListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanquesListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanquesListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
