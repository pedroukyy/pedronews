// user-form.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone:false
})
export class UserFormComponent {
  @Input() initialData: any;
  @Output() formSubmit = new EventEmitter<any>();

  name = '';
  lastName = '';
  email = '';
  password = '';
  country = '';

  countryOptions = [
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
      this.country = this.initialData.country || '';
    }
  }

  submit() {
    this.formSubmit.emit({
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      country: this.country
    });
  }
}


