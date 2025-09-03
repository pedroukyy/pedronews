import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  standalone: false
})
export class SideBarComponent {
  @Input() items: string[] = [];
}
