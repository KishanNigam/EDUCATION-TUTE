import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tuterSignup, tuterlogIn } from 'src/app/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TuteServiceService {
  isTuterLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private route: Router) {}

  tuterSignUp(data: tuterSignup) {
    this.http
      .post('http://localhost:3000/Teacher-list', data, { observe: 'response' })
      .subscribe((result) => {
        this.isTuterLoggedIn.next(true);
        localStorage.setItem('tuter', JSON.stringify(result.body));
        this.route.navigate(['teacher-dashboard']);
      });
  }
  reloadTuter() {
    if (localStorage.getItem('tuter')) {
      this.isTuterLoggedIn.next(true);
      this.route.navigate(['teacher-dashboard']);
    }
  }

  // LogIn Function
  tuterSignIn(data: tuterlogIn) {
    console.warn(data);
    this.http.get(
      `http://localhost:3000/Teacher-list?name=${data.name}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      console.warn(result);
      if(result && result.body &&result.body.length){
        localStorage.setItem('tuter', JSON.stringify(result.body));
        this.route.navigate(['teacher-dashboard']);
      }
       else {
        console.warn("login failed");
        this.isLoginError.emit(true)
       } 
    });
  }
}
