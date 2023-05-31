import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditMaterialComponent } from './teacher-edit-material.component';

describe('TeacherEditMaterialComponent', () => {
  let component: TeacherEditMaterialComponent;
  let fixture: ComponentFixture<TeacherEditMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherEditMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherEditMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
