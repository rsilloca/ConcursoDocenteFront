import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulanteQualifyComponent } from './postulante-qualify.component';

describe('PostulanteQualifyComponent', () => {
  let component: PostulanteQualifyComponent;
  let fixture: ComponentFixture<PostulanteQualifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulanteQualifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulanteQualifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
