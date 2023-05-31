import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditContactsComponent } from './teacher-edit-contacts.component';

describe('TeacherEditContactsComponent', () => {
  let component: TeacherEditContactsComponent;
  let fixture: ComponentFixture<TeacherEditContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherEditContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherEditContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
