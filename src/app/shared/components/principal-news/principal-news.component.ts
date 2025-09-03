import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-principal-news',
  templateUrl: './principal-news.component.html',
  standalone:false
})
export class PrincipalNewsComponent {
  @Input() title!: string;
  @Input() imageUrl!: string;
}
