import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router, private jwtHelper: JwtHelperService) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['auth']);
      return false
    }
    return true
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    if(token != undefined && token !== '') {
      return !this.jwtHelper.isTokenExpired(token);
    }

    return false;
  }
}
