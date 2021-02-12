import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudanteCreateComponent } from './estudante-create.component';

describe('EstudanteCreateComponent', () => {
  let component: EstudanteCreateComponent;
  let fixture: ComponentFixture<EstudanteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudanteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudanteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
