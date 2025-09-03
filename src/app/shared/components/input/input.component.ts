import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  standalone: false
})
export class InputComponent {
  @Input() label!: string;
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() model: any;
  @Output() modelChange = new EventEmitter<any>();

  onValueChange(event: any) {
    this.model = event.detail.value;
    this.modelChange.emit(this.model);
  }
}

