import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadCreateUpdateComponent } from './facultad-create-update.component';

describe('FacultadCreateUpdateComponent', () => {
  let component: FacultadCreateUpdateComponent;
  let fixture: ComponentFixture<FacultadCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultadCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
