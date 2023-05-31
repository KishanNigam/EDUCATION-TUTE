import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewAssignComponent } from './teacher-view-assign.component';

describe('TeacherViewAssignComponent', () => {
  let component: TeacherViewAssignComponent;
  let fixture: ComponentFixture<TeacherViewAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherViewAssignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherViewAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
