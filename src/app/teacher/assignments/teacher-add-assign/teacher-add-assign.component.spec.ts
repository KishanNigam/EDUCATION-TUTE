import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddAssignComponent } from './teacher-add-assign.component';

describe('TeacherAddAssignComponent', () => {
  let component: TeacherAddAssignComponent;
  let fixture: ComponentFixture<TeacherAddAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAddAssignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAddAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
