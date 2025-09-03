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
    // Validación básica antes de registrar
    if (!formData.name || !formData.lastName || !formData.country) {
      this.ui.showToast('Completa nombre, apellido y nacionalidad', 'danger');
      return;
    }

    await this.ui.showLoading('Registrando usuario...');
    const result = await this.userService.register({
      name: formData.name,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      country: formData.country
    });
    await this.ui.hideLoading();

    if (result) {
      this.ui.showToast('Registro exitoso', 'success');
      this.router.navigate(['/login']);
    } else {
      this.ui.showToast('Error al registrar usuario', 'danger');
    }
  }
}


