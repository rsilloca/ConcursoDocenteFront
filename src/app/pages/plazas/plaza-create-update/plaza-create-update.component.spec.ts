import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlazaCreateUpdateComponent } from './plaza-create-update.component';

describe('PlazaCreateUpdateComponent', () => {
  let component: PlazaCreateUpdateComponent;
  let fixture: ComponentFixture<PlazaCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlazaCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlazaCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
