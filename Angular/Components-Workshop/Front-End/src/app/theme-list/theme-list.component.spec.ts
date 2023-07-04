import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeListComponent } from './theme-list.component';

describe('ThemeListComponent', () => {
  let component: ThemeListComponent;
  let fixture: ComponentFixture<ThemeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeListComponent]
    });
    fixture = TestBed.createComponent(ThemeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
