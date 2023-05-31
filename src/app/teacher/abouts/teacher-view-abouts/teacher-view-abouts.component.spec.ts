import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewAboutsComponent } from './teacher-view-abouts.component';

describe('TeacherViewAboutsComponent', () => {
  let component: TeacherViewAboutsComponent;
  let fixture: ComponentFixture<TeacherViewAboutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherViewAboutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherViewAboutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
