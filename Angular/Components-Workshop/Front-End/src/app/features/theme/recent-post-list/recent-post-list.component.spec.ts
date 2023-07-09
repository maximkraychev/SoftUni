import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPostListComponent } from './recent-post-list.component';

describe('RecentPostListComponent', () => {
  let component: RecentPostListComponent;
  let fixture: ComponentFixture<RecentPostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentPostListComponent]
    });
    fixture = TestBed.createComponent(RecentPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
