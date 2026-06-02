import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-learn-faster',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './learn-faster.component.html',
})
export class LearnFasterComponent {}
