import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaCreateUpdateComponent } from './asignatura-create-update.component';

describe('AsignaturaCreateUpdateComponent', () => {
  let component: AsignaturaCreateUpdateComponent;
  let fixture: ComponentFixture<AsignaturaCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturaCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
