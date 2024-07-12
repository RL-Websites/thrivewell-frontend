import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule, NgbCollapse],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  routerLink: any;
  public isCollapsed = true;
}
