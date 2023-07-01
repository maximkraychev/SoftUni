import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideEditComponent } from './side-edit.component';

describe('SideEditComponent', () => {
  let component: SideEditComponent;
  let fixture: ComponentFixture<SideEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideEditComponent]
    });
    fixture = TestBed.createComponent(SideEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
