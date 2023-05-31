import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddCoursesComponent } from './teacher-add-courses.component';

describe('TeacherAddCoursesComponent', () => {
  let component: TeacherAddCoursesComponent;
  let fixture: ComponentFixture<TeacherAddCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAddCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAddCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
