import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {}
