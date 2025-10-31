import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMostrar } from './cliente-mostrar';

describe('ClienteMostrar', () => {
  let component: ClienteMostrar;
  let fixture: ComponentFixture<ClienteMostrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteMostrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteMostrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
