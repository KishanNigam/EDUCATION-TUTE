import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditAssignComponent } from './teacher-edit-assign.component';

describe('TeacherEditAssignComponent', () => {
  let component: TeacherEditAssignComponent;
  let fixture: ComponentFixture<TeacherEditAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherEditAssignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherEditAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
