import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoCreateUpdateComponent } from './departamento-create-update.component';

describe('DepartamentoCreateUpdateComponent', () => {
  let component: DepartamentoCreateUpdateComponent;
  let fixture: ComponentFixture<DepartamentoCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
