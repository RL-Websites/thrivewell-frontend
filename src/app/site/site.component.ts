import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './site.component.html',
  styles: ``,
})
export class SiteComponent {
  onActive() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }
  }
}
