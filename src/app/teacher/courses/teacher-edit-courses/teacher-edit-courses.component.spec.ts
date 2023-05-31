import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditCoursesComponent } from './teacher-edit-courses.component';

describe('TeacherEditCoursesComponent', () => {
  let component: TeacherEditCoursesComponent;
  let fixture: ComponentFixture<TeacherEditCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherEditCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherEditCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
