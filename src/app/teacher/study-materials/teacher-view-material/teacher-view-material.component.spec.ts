import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewMaterialComponent } from './teacher-view-material.component';

describe('TeacherViewMaterialComponent', () => {
  let component: TeacherViewMaterialComponent;
  let fixture: ComponentFixture<TeacherViewMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherViewMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherViewMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
