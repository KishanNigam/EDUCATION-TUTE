import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeacherAuthComponent } from '../app/teacher/teacher-auth/teacher-auth.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // teacher routes
  {
    path: 'teacher/auth',
    component: TeacherAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
