import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditNewsComponent } from './teacher-edit-news.component';

describe('TeacherEditNewsComponent', () => {
  let component: TeacherEditNewsComponent;
  let fixture: ComponentFixture<TeacherEditNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherEditNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherEditNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
