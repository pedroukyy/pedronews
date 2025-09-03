import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: false
})
export class CardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
}
