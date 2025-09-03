// list.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  standalone: false
})
export class ListComponent {
  @Input() items: string[] = [];
}

