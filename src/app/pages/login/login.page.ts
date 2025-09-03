import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private ui: UiService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onLogin() {
    if (this.loginForm.invalid) {
      this.ui.showToast('Completa todos los campos correctamente', 'danger');
      return;
    }
    await this.ui.showLoading('Iniciando sesión...');
    const { email, password } = this.loginForm.value;
    const success = await this.userService.login(email, password);
    await this.ui.hideLoading();

    if (success) {
      this.ui.showToast('Bienvenido', 'success');
      this.router.navigate(['/home']);
    } else {
      this.ui.showToast('Credenciales incorrectas', 'danger');
    }
  }
}
