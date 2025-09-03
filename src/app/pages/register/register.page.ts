import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage {
  constructor(
    private userService: UserService,
    private router: Router,
    private ui: UiService
  ) {}

  async onRegister(formData: any) {
    await this.ui.showLoading('Registrando usuario...');
    await this.userService.register(formData);
    await this.ui.hideLoading();
    this.ui.showToast('Registro exitoso', 'success');
    this.router.navigate(['/login']);
  }
}

