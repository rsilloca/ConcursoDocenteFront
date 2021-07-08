import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulanteAlertComponent } from './postulante-alert.component';

describe('PostulanteAlertComponent', () => {
  let component: PostulanteAlertComponent;
  let fixture: ComponentFixture<PostulanteAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulanteAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulanteAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
