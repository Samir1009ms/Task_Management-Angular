import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";

import { Observable } from "rxjs";
import { tap } from 'rxjs/operators'

import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticadetGuard implements CanActivate {
  constructor(private router: Router,
    private authService: AuthService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn$.pipe(
      tap((isLogged) => {
        if (!isLogged) {
          // this.router.navigate(['/login'])
        }
      })
    )
  }

}
