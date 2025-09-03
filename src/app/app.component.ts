import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  selectCategory(category: string) {
    this.router.navigate(['/home'], { queryParams: { category } });
  }

  async logout() {
    await this.userService.logout();
    this.router.navigate(['/login']);
  }
}
