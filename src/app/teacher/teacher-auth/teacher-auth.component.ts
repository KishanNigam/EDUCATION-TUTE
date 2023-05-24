import { Component, OnInit } from '@angular/core';
import { TuteServiceService } from '../services/tute-service.service';
import { Router } from '@angular/router';
import { tuterSignup, tuterlogIn } from 'src/app/data-type';

@Component({
  selector: 'app-teacher-auth',
  templateUrl: './teacher-auth.component.html',
  styleUrls: ['./teacher-auth.component.css'],
})
export class TeacherAuthComponent implements OnInit {
  constructor(private tuter: TuteServiceService, private router: Router) {}
  showTuteLogin = false;
  tuteAuthError:string ='';
  ngOnInit(): void {
    this.tuter.reloadTuter();
  }

  signUp(data: tuterSignup): void {
    this.tuter.tuterSignUp(data);
  }
  signIn(data: tuterlogIn): void {
    this.tuteAuthError="";
    this.tuter.tuterSignIn(data);
    this.tuter.isLoginError.subscribe((error)=>{
      if(error){
        this.tuteAuthError="Name or Password is not Correct"
      }
    })
  }

  openTuteLogin() {
    this.showTuteLogin = false;
  }
  openTuteSignUp() {
    this.showTuteLogin = true;
  }
}
