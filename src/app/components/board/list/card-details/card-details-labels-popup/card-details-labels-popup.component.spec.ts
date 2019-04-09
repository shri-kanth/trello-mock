import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsLabelsPopupComponent } from './card-details-labels-popup.component';

describe('CardDetailsLabelsPopupComponent', () => {
  let component: CardDetailsLabelsPopupComponent;
  let fixture: ComponentFixture<CardDetailsLabelsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailsLabelsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsLabelsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
