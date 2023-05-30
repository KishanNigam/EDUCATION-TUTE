import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDashSidebarComponent } from './teacher-dash-sidebar.component';

describe('TeacherDashSidebarComponent', () => {
  let component: TeacherDashSidebarComponent;
  let fixture: ComponentFixture<TeacherDashSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherDashSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDashSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
