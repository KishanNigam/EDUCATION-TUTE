import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TuteServiceService } from './services/tute-service.service';

@Injectable({
  providedIn: 'root'
})
export class TuteAuthguardGuard implements CanActivate {
  constructor (private tuterServicePermission:TuteServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (localStorage.getItem('tuter')) {
       return true
      }
      return this.tuterServicePermission.isTuterLoggedIn;
  }
  
}
