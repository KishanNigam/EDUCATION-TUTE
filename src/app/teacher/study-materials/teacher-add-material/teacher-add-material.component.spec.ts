import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddMaterialComponent } from './teacher-add-material.component';

describe('TeacherAddMaterialComponent', () => {
  let component: TeacherAddMaterialComponent;
  let fixture: ComponentFixture<TeacherAddMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAddMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAddMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
