import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderService } from '@app/services/loader.service';

@Component({
  selector: 'loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styles: ``,
})
export class LoaderComponent {
  constructor(public loader: LoaderService) {}
}
