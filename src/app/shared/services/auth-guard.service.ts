import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from 'kinvey-angular-sdk';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _router: Router, private userService: UserService, private userDataService: UserDataService) { }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let user = this.getActivatedUserData();
    if (state.url === '/login') {
      if (user) {
        this.userDataService.setUserId(user);
        this._router.navigate(['/dashboard']);
        return false;
      }
      else {
        return true;
      }
    }
    else if (state.url === '/dashboard') {
      if (!user) {
        this._router.navigate(['/login']);
        return false;
      }
      else {
        this.userDataService.setUserId(user);
        return true;
      }

    }
  }
  async getActivatedUserData() {
    let user = await this.userService.getActiveUser()
    return user;
  }
}
