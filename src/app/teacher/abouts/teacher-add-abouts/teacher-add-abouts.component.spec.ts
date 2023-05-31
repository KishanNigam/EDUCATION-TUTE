import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddAboutsComponent } from './teacher-add-abouts.component';

describe('TeacherAddAboutsComponent', () => {
  let component: TeacherAddAboutsComponent;
  let fixture: ComponentFixture<TeacherAddAboutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAddAboutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAddAboutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
