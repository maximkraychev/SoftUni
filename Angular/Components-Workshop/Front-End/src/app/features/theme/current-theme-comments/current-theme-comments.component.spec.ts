import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentThemeCommentsComponent } from './current-theme-comments.component';

describe('CurrentThemeCommentsComponent', () => {
  let component: CurrentThemeCommentsComponent;
  let fixture: ComponentFixture<CurrentThemeCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentThemeCommentsComponent]
    });
    fixture = TestBed.createComponent(CurrentThemeCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
