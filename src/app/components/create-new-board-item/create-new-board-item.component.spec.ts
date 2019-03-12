import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBoardItemComponent } from './create-new-board-item.component';

describe('CreateNewBoardItemComponent', () => {
  let component: CreateNewBoardItemComponent;
  let fixture: ComponentFixture<CreateNewBoardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewBoardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewBoardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
