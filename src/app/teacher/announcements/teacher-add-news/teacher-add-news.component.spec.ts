import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddNewsComponent } from './teacher-add-news.component';

describe('TeacherAddNewsComponent', () => {
  let component: TeacherAddNewsComponent;
  let fixture: ComponentFixture<TeacherAddNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAddNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAddNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
