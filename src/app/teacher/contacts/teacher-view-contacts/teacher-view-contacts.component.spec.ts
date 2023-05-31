import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewContactsComponent } from './teacher-view-contacts.component';

describe('TeacherViewContactsComponent', () => {
  let component: TeacherViewContactsComponent;
  let fixture: ComponentFixture<TeacherViewContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherViewContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherViewContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
