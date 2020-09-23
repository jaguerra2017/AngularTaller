import { Injectable }    from '@angular/core';
import { CanActivate, Router,
     ActivatedRouteSnapshot,
     RouterStateSnapshot } from '@angular/router';
import { AuthService }   from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
      private AuthService: AuthService,
      private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.AuthService.isLoggedIn) { return true; }

    this.router.navigate(['login']);
    return false;
    }
}
