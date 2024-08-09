import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './site/components/loader/loader.component';
import { OpeningModalComponent } from './site/components/opening-modal/opening-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, OpeningModalComponent, CommonModule],
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent implements OnInit {
  modalVisible = false;

  constructor(private loaderService: LoaderService) {}

  onActive() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.loaderService.hide();
    }, 200);
    this.modalVisible = true;
  }
}
