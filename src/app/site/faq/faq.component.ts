import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { OtherBannerFrameComponent } from '../components/other-banner-frame/other-banner-frame.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    HeaderComponent,
    OtherBannerFrameComponent,
    FooterComponent,
    NgbAccordionModule,
    CommonModule,
  ],
  templateUrl: './faq.component.html',
  styles: ``,
})
export class FaqComponent {
  items = [
    {
      question: 'Vulputate cras et eu sed. Venenatis imperdiet et nulla?',
      answer1:
        'Lorem ipsum dolor sit amet consectetur. Est tincidunt at pellentesque in commodo euismod. Id in id adipiscing ultrices tempus porttitor interdum. Molestie aliquet et nulla quis ullamcorper venenatis turpis. Eget a nisi sit massa. Bibendum velit ultrices enim eu non sed orci. Urna bibendum non eu enim enim ultrices platea. Pulvinar nisi facilisi lobortis feugiat volutpat bibendum id dapibus. Vulputate cras et eu sed. Venenatis imperdiet et nulla felis commodo scelerisque. Scelerisque eget id sit porta tortor arcu. Arcu arcu amet vivamus morbi lobortis vulputate massa sed.',
      answer2:
        'Lorem ipsum dolor sit amet consectetur. Est tincidunt at pellentesque in commodo euismod. Id in id adipiscing ultrices tempus porttitor interdum. Molestie aliquet et nulla quis ullamcorper venenatis turpis. Eget a nisi sit massa. Bibendum velit ultrices enim eu non sed orci. Urna bibendum non eu enim enim ultrices platea. Pulvinar nisi facilisi lobortis feugiat volutpat bibendum id dapibus. Vulputate cras et eu sed. Venenatis imperdiet et nulla felis commodo scelerisque. Scelerisque eget id sit porta tortor arcu. Arcu arcu amet vivamus morbi lobortis vulputate massa sed. Libero viverra dignissim viverra mi. Cursus ullamcorper cras purus elit gravida nisl auctor integer mollis. Risus et purus cras magnis donec sagittis.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur est tincidun?',
      answer1:
        'Lorem ipsum dolor sit amet consectetur. Est tincidunt at pellentesque in commodo euismod. Id in id adipiscing ultrices tempus porttitor interdum. Molestie aliquet et nulla quis ullamcorper venenatis turpis. Eget a nisi sit massa. Bibendum velit ultrices enim eu non sed orci. Urna bibendum non eu enim enim ultrices platea. Pulvinar nisi facilisi lobortis feugiat volutpat bibendum id dapibus. Vulputate cras et eu sed. Venenatis imperdiet et nulla felis commodo scelerisque. Scelerisque eget id sit porta tortor arcu. Arcu arcu amet vivamus morbi lobortis vulputate massa sed.',
      answer2:
        'Lorem ipsum dolor sit amet consectetur. Est tincidunt at pellentesque in commodo euismod. Id in id adipiscing ultrices tempus porttitor interdum. Molestie aliquet et nulla quis ullamcorper venenatis turpis. Eget a nisi sit massa. Bibendum velit ultrices enim eu non sed orci. Urna bibendum non eu enim enim ultrices platea. Pulvinar nisi facilisi lobortis feugiat volutpat bibendum id dapibus. Vulputate cras et eu sed. Venenatis imperdiet et nulla felis commodo scelerisque. Scelerisque eget id sit porta tortor arcu. Arcu arcu amet vivamus morbi lobortis vulputate massa sed. Libero viverra dignissim viverra mi. Cursus ullamcorper cras purus elit gravida nisl auctor integer mollis. Risus et purus cras magnis donec sagittis.',
    },
    {
      question: 'Vulputate cras et eu sed. Venenatis imperdiet et nulla?',
      answer1:
        'Lorem ipsum dolor sit amet consectetur. Est tincidunt at pellentesque in commodo euismod. Id in id adipiscing ultrices tempus porttitor interdum. Molestie aliquet et nulla quis ullamcorper venenatis turpis. Eget a nisi sit massa. Bibendum velit ultrices enim eu non sed orci. Urna bibendum non eu enim enim ultrices platea. Pulvinar nisi facilisi lobortis feugiat volutpat bibendum id dapibus. Vulputate cras et eu sed. Venenatis imperdiet et nulla felis commodo scelerisque. Scelerisque eget id sit porta tortor arcu. Arcu arcu amet vivamus morbi lobortis vulputate massa sed.',
      answer2:
        'Lorem ipsum dolor sit amet consectetur. Est tincidunt at pellentesque in commodo euismod. Id in id adipiscing ultrices tempus porttitor interdum. Molestie aliquet et nulla quis ullamcorper venenatis turpis. Eget a nisi sit massa. Bibendum velit ultrices enim eu non sed orci. Urna bibendum non eu enim enim ultrices platea. Pulvinar nisi facilisi lobortis feugiat volutpat bibendum id dapibus. Vulputate cras et eu sed. Venenatis imperdiet et nulla felis commodo scelerisque. Scelerisque eget id sit porta tortor arcu. Arcu arcu amet vivamus morbi lobortis vulputate massa sed. Libero viverra dignissim viverra mi. Cursus ullamcorper cras purus elit gravida nisl auctor integer mollis. Risus et purus cras magnis donec sagittis.',
    },
    {
      question:
        'Libero viverra dignissim viverra mi cursus ullamcorper cras purus?',
      answer1:
        'Lorem ipsum dolor sit amet consectetur. Est tincidunt at pellentesque in commodo euismod. Id in id adipiscing ultrices tempus porttitor interdum. Molestie aliquet et nulla quis ullamcorper venenatis turpis. Eget a nisi sit massa. Bibendum velit ultrices enim eu non sed orci. Urna bibendum non eu enim enim ultrices platea. Pulvinar nisi facilisi lobortis feugiat volutpat bibendum id dapibus. Vulputate cras et eu sed. Venenatis imperdiet et nulla felis commodo scelerisque. Scelerisque eget id sit porta tortor arcu. Arcu arcu amet vivamus morbi lobortis vulputate massa sed.',
      answer2:
        'Lorem ipsum dolor sit amet consectetur. Est tincidunt at pellentesque in commodo euismod. Id in id adipiscing ultrices tempus porttitor interdum. Molestie aliquet et nulla quis ullamcorper venenatis turpis. Eget a nisi sit massa. Bibendum velit ultrices enim eu non sed orci. Urna bibendum non eu enim enim ultrices platea. Pulvinar nisi facilisi lobortis feugiat volutpat bibendum id dapibus. Vulputate cras et eu sed. Venenatis imperdiet et nulla felis commodo scelerisque. Scelerisque eget id sit porta tortor arcu. Arcu arcu amet vivamus morbi lobortis vulputate massa sed. Libero viverra dignissim viverra mi. Cursus ullamcorper cras purus elit gravida nisl auctor integer mollis. Risus et purus cras magnis donec sagittis.',
    },
    {
      question: 'Le purus elit gravida nisl auctor integer mollis risus e?',
      answer1:
        'Lorem ipsum dolor sit amet consectetur. Est tincidunt at pellentesque in commodo euismod. Id in id adipiscing ultrices tempus porttitor interdum. Molestie aliquet et nulla quis ullamcorper venenatis turpis. Eget a nisi sit massa. Bibendum velit ultrices enim eu non sed orci. Urna bibendum non eu enim enim ultrices platea. Pulvinar nisi facilisi lobortis feugiat volutpat bibendum id dapibus. Vulputate cras et eu sed. Venenatis imperdiet et nulla felis commodo scelerisque. Scelerisque eget id sit porta tortor arcu. Arcu arcu amet vivamus morbi lobortis vulputate massa sed.',
      answer2:
        'Lorem ipsum dolor sit amet consectetur. Est tincidunt at pellentesque in commodo euismod. Id in id adipiscing ultrices tempus porttitor interdum. Molestie aliquet et nulla quis ullamcorper venenatis turpis. Eget a nisi sit massa. Bibendum velit ultrices enim eu non sed orci. Urna bibendum non eu enim enim ultrices platea. Pulvinar nisi facilisi lobortis feugiat volutpat bibendum id dapibus. Vulputate cras et eu sed. Venenatis imperdiet et nulla felis commodo scelerisque. Scelerisque eget id sit porta tortor arcu. Arcu arcu amet vivamus morbi lobortis vulputate massa sed. Libero viverra dignissim viverra mi. Cursus ullamcorper cras purus elit gravida nisl auctor integer mollis. Risus et purus cras magnis donec sagittis.',
    },
  ];
}
