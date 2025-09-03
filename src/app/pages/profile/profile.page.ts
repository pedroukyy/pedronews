import { Component } from '@angular/core';
import { UserService, User } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage {
  user: User | null = null;

  constructor(
    private userService: UserService,
    private router: Router,
    private ui: UiService
  ) {}

  async ionViewWillEnter() {
    this.user = await this.userService.getUser();
  }

  async logout() {
    await this.userService.logout();
    this.ui.showToast('Sesión cerrada', 'success');
    this.router.navigate(['/login']);
  }
}
