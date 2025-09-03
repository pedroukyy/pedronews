import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const loggedIn = await this.userService.isLoggedIn();
    if (loggedIn) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
