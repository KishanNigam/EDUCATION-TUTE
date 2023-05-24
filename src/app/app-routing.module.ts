import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeacherAuthComponent } from './teacher/teacher-auth/teacher-auth.component';
import { DashboardComponent } from './teacher/dashboard/dashboard.component';
import { TuteAuthguardGuard } from './teacher/tute-authguard.guard';

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
    path: 'teacher/dashboard',
    component: DashboardComponent,
    canActivate: [TuteAuthguardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
