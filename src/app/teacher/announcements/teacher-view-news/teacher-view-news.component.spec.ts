import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewNewsComponent } from './teacher-view-news.component';

describe('TeacherViewNewsComponent', () => {
  let component: TeacherViewNewsComponent;
  let fixture: ComponentFixture<TeacherViewNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherViewNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherViewNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
