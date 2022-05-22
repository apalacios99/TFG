import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../services/auth/login.service";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    public loginService: LoginService,
    public router: Router
  ){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.loginService.isLoggedIn !== true) {
      this.router.navigate(['iniciar-sesion'])
    }
    return true;
  }

}
