import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone: false
})
export class UserFormComponent {
  @Input() initialData: any;
  @Output() formSubmit = new EventEmitter<any>();

  name = '';
  lastName = '';
  email = '';
  password = '';
  country: { value: string; label: string } | null = null;

  countryOptions: { value: string; label: string }[] = [
    { value: 'CO', label: '🇨🇴 Colombia' },
    { value: 'US', label: '🇺🇸 Estados Unidos' },
    { value: 'ES', label: '🇪🇸 España' }
  ];

  ngOnInit() {
    if (this.initialData) {
      this.name = this.initialData.name || '';
      this.lastName = this.initialData.lastName || '';
      this.email = this.initialData.email || '';
      this.password = this.initialData.password || '';

      // Si initialData.country es un objeto con id/value, adaptarlo
      if (this.initialData.country?.id && this.initialData.country?.value) {
        this.country = {
          value: this.initialData.country.id,
          label: this.initialData.country.value
        };
      }
    }
  }

  submit() {
    if (!this.name || !this.lastName || !this.email || !this.password || !this.country) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Transformar { value, label } a { id, value } para guardarlo
    this.formSubmit.emit({
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      country: { id: this.country.value, value: this.country.label }
    });
  }
}
