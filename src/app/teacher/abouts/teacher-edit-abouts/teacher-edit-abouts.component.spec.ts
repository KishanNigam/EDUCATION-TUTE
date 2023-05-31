import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditAboutsComponent } from './teacher-edit-abouts.component';

describe('TeacherEditAboutsComponent', () => {
  let component: TeacherEditAboutsComponent;
  let fixture: ComponentFixture<TeacherEditAboutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherEditAboutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherEditAboutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
