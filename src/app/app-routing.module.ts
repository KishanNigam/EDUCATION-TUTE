import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeacherAuthComponent } from './teacher/teacher-auth/teacher-auth.component';
import { DashboardComponent } from './teacher/dashboard/dashboard.component';
import { TuteAuthguardGuard } from './teacher/tute-authguard.guard';
import { TeacherDashSidebarComponent } from './teacher/teacher-dash-sidebar/teacher-dash-sidebar.component';
import { TeacherViewCoursesComponent } from './teacher/courses/teacher-view-courses/teacher-view-courses.component';
import { TeacherViewAssignComponent } from './teacher/assignments/teacher-view-assign/teacher-view-assign.component';
import { TeacherViewMaterialComponent } from './teacher/study-materials/teacher-view-material/teacher-view-material.component';
import { TeacherViewNewsComponent } from './teacher/announcements/teacher-view-news/teacher-view-news.component';
import { TeacherViewContactsComponent } from './teacher/contacts/teacher-view-contacts/teacher-view-contacts.component';
import { TeacherViewAboutsComponent } from './teacher/abouts/teacher-view-abouts/teacher-view-abouts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // teacher routes
  {
    path: 'teacher/auth',
    component: TeacherAuthComponent,
  },
  {
    path: 'teacher-dashboard',
    component: DashboardComponent,
    canActivate: [TuteAuthguardGuard], // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'teacher-courses',  // child route path
        component: TeacherViewCoursesComponent, // child route component that the router renders
      },
      {
        path: 'teacher-assignments',  // child route path
        component: TeacherViewAssignComponent, // child route component that the router renders
      },
      {
        path: 'teacher-study-materials',  // child route path
        component: TeacherViewMaterialComponent, // child route component that the router renders
      },
      {
        path: 'teacher-news',  // child route path
        component: TeacherViewNewsComponent, // child route component that the router renders
      },
      {
        path: 'teacher-contacts',  // child route path
        component: TeacherViewContactsComponent, // child route component that the router renders
      },
      {
        path: 'teacher-about-us',  // child route path
        component: TeacherViewAboutsComponent, // child route component that the router renders
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
