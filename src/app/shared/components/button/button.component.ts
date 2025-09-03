import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: false
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Input() color: string = 'primary';
}

