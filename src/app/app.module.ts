import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './teacher/dashboard/dashboard.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { TeacherAuthComponent } from './teacher/teacher-auth/teacher-auth.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeacherDashSidebarComponent } from './teacher/teacher-dash-sidebar/teacher-dash-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CommonHeaderComponent,
    TeacherAuthComponent,
    HomeComponent,
    TeacherDashSidebarComponent
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
