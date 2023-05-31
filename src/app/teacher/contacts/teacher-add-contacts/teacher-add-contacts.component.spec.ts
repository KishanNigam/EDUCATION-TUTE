import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddContactsComponent } from './teacher-add-contacts.component';

describe('TeacherAddContactsComponent', () => {
  let component: TeacherAddContactsComponent;
  let fixture: ComponentFixture<TeacherAddContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherAddContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherAddContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
