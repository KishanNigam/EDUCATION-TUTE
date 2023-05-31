import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './teacher/dashboard/dashboard.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeacherAuthComponent } from './teacher/teacher-auth/teacher-auth.component';
import { TeacherDashSidebarComponent } from './teacher/teacher-dash-sidebar/teacher-dash-sidebar.component';
import { TeacherAddCoursesComponent } from './teacher/courses/teacher-add-courses/teacher-add-courses.component';
import { TeacherViewCoursesComponent } from './teacher/courses/teacher-view-courses/teacher-view-courses.component';
import { TeacherEditCoursesComponent } from './teacher/courses/teacher-edit-courses/teacher-edit-courses.component';
import { TeacherViewAssignComponent } from './teacher/assignments/teacher-view-assign/teacher-view-assign.component';
import { TeacherAddAssignComponent } from './teacher/assignments/teacher-add-assign/teacher-add-assign.component';
import { TeacherEditAssignComponent } from './teacher/assignments/teacher-edit-assign/teacher-edit-assign.component';
import { TeacherViewMaterialComponent } from './teacher/study-materials/teacher-view-material/teacher-view-material.component';
import { TeacherAddMaterialComponent } from './teacher/study-materials/teacher-add-material/teacher-add-material.component';
import { TeacherEditMaterialComponent } from './teacher/study-materials/teacher-edit-material/teacher-edit-material.component';
import { TeacherViewNewsComponent } from './teacher/announcements/teacher-view-news/teacher-view-news.component';
import { TeacherAddNewsComponent } from './teacher/announcements/teacher-add-news/teacher-add-news.component';
import { TeacherEditNewsComponent } from './teacher/announcements/teacher-edit-news/teacher-edit-news.component';
import { TeacherViewContactsComponent } from './teacher/contacts/teacher-view-contacts/teacher-view-contacts.component';
import { TeacherAddContactsComponent } from './teacher/contacts/teacher-add-contacts/teacher-add-contacts.component';
import { TeacherEditContactsComponent } from './teacher/contacts/teacher-edit-contacts/teacher-edit-contacts.component';
import { TeacherViewAboutsComponent } from './teacher/abouts/teacher-view-abouts/teacher-view-abouts.component';
import { TeacherEditAboutsComponent } from './teacher/abouts/teacher-edit-abouts/teacher-edit-abouts.component';
import { TeacherAddAboutsComponent } from './teacher/abouts/teacher-add-abouts/teacher-add-abouts.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CommonHeaderComponent,
    TeacherAuthComponent,
    HomeComponent,
    TeacherDashSidebarComponent,
    TeacherAddCoursesComponent,
    TeacherViewCoursesComponent,
    TeacherEditCoursesComponent,
    TeacherViewAssignComponent,
    TeacherAddAssignComponent,
    TeacherEditAssignComponent,
    TeacherViewMaterialComponent,
    TeacherAddMaterialComponent,
    TeacherEditMaterialComponent,
    TeacherViewNewsComponent,
    TeacherAddNewsComponent,
    TeacherEditNewsComponent,
    TeacherViewContactsComponent,
    TeacherAddContactsComponent,
    TeacherEditContactsComponent,
    TeacherViewAboutsComponent,
    TeacherEditAboutsComponent,
    TeacherAddAboutsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
