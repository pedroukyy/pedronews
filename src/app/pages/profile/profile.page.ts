import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {
  userData: Partial<User> = {};

  constructor(
    private userService: UserService,
    private router: Router,
    private ui: UiService
  ) {}

  async ngOnInit() {
    const user = await this.userService.getUser();
    if (user) {
      this.userData = { ...user };
    }
  }

  async onUpdate(updatedData: any) {
    await this.ui.showLoading('Guardando cambios...');
    await this.userService.updateUser(updatedData);
    await this.ui.hideLoading();
    this.ui.showToast('Perfil actualizado correctamente', 'success');
    this.router.navigate(['/home']);
  }

 
}
