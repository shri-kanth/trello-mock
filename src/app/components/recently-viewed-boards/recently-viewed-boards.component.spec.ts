import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyViewedBoardsComponent } from './recently-viewed-boards.component';

describe('RecentlyViewedBoardsComponent', () => {
  let component: RecentlyViewedBoardsComponent;
  let fixture: ComponentFixture<RecentlyViewedBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyViewedBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyViewedBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
