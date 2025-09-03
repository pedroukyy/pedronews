import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  standalone: false

})
export class SelectComponent {
  @Input() label!: string;
  @Input() options: { value: string; label: string }[] = [];
  @Input() model: any;
  @Input() multiple = false;
  @Output() modelChange = new EventEmitter<any>();

  onValueChange(event: any) {
    this.model = event.detail.value;
    this.modelChange.emit(this.model);
  }
}
