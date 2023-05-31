import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewCoursesComponent } from './teacher-view-courses.component';

describe('TeacherViewCoursesComponent', () => {
  let component: TeacherViewCoursesComponent;
  let fixture: ComponentFixture<TeacherViewCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherViewCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherViewCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
