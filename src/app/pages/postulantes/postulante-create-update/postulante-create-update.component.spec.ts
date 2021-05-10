import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulanteCreateUpdateComponent } from './postulante-create-update.component';

describe('PostulanteCreateUpdateComponent', () => {
  let component: PostulanteCreateUpdateComponent;
  let fixture: ComponentFixture<PostulanteCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulanteCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulanteCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
