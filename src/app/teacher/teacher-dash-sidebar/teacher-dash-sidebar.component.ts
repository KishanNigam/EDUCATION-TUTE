import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-dash-sidebar',
  templateUrl: './teacher-dash-sidebar.component.html',
  styleUrls: ['./teacher-dash-sidebar.component.css']
})
export class TeacherDashSidebarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  tuterLogOut() {
    localStorage.removeItem('tuter');
    this.route.navigate(['/']);
  }
}
