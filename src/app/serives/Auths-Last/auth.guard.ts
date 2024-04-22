import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthServiceService } from '../auth/user-auth-service.service';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private userAuthServiceService:UserAuthServiceService,
    private authenticationService:AuthenticationService,
    private router : Router
    ){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userAuthServiceService.getToken() !== null) {
      const role = route.data['roles'] as Array<string>;

      if (role) {
        const match = this.authenticationService.roleMatch(role);
          
        if (match) {
          return true;
        } else {
          this.router.navigate(['/forbiden']);
          return false;
        }
      }
    }

    this.router.navigate(['/login']);
    return false;
  }

}
