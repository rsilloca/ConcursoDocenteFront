import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoCreateUpdateComponent } from './concurso-create-update.component';

describe('ConcursoCreateUpdateComponent', () => {
  let component: ConcursoCreateUpdateComponent;
  let fixture: ComponentFixture<ConcursoCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursoCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursoCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
