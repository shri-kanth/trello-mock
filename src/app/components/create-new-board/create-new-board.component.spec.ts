import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBoardComponent } from './create-new-board.component';

describe('CreateNewBoardComponent', () => {
  let component: CreateNewBoardComponent;
  let fixture: ComponentFixture<CreateNewBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
