import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsPopUpComponent } from './boards-pop-up.component';

describe('BoardsPopUpComponent', () => {
  let component: BoardsPopUpComponent;
  let fixture: ComponentFixture<BoardsPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
