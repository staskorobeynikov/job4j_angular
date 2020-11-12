import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './shared/services/auth.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getItem().then(
      isLoggedIn => {
        if (isLoggedIn) {
          return true;
        } else {
          this.router.navigate(['login'], {
            queryParams: {
              auth: false
            }
          });
        }
      }
    );
  }
}
