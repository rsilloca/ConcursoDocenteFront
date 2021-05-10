import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlazaComponent } from './card-plaza.component';

describe('CardPlazaComponent', () => {
  let component: CardPlazaComponent;
  let fixture: ComponentFixture<CardPlazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPlazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPlazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
