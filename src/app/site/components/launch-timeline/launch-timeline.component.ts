import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnFasterComponent } from '../learn-faster/learn-faster.component';

@Component({
  selector: 'app-launch-timeline',
  standalone: true,
  imports: [CommonModule, LearnFasterComponent],
  templateUrl: './launch-timeline.component.html',
})
export class LaunchTimelineComponent implements AfterViewInit, OnDestroy {
  @ViewChild('timelineWrapper', { static: true, read: ElementRef })
  timelineWrapper!: ElementRef<HTMLElement>;
  @ViewChild('timelineBody', { static: true, read: ElementRef })
  timelineBody!: ElementRef<HTMLElement>;
  @ViewChildren('timelineItem', { read: ElementRef }) timelineItems!: QueryList<
    ElementRef<HTMLElement>
  >;

  activeIndex = 0;
  progressHeight = 0;
  firstCardFillPercent = 0;

  timeline = [
    {
      title: 'Discovery & Onboarding',
      description:
        'We begin by understanding your business model, treatment categories, pricing structure, and branding goals. Your account setup and onboarding process starts immediately.',
      steps: [
        'Business discovery call',
        'Treatment category planning',
        'Brand onboarding',
        'Account setup initiation',
        'Compliance and workflow discussion',
      ],
      day: 'Day 1–3',
      side: 'left',
    },
    {
      title: 'Platform & Brand Configuration',
      description:
        'Your telehealth platform is configured with your branding, workflows, treatment programs, pricing, intake forms, and operational settings.',
      steps: [
        'White-label branding setup',
        'Intake and onboarding forms',
        'Product and package configuration',
        'Payment workflow setup',
        'Dashboard and portal configuration',
      ],
      day: 'Day 4–7',
      side: 'right',
    },
    {
      title: 'Provider, Pharmacy & Workflow Integration',
      description:
        'We connect your workflows with providers, pharmacy fulfillment partners, and operational support systems to ensure everything is functioning smoothly.',
      steps: [
        'Provider workflow setup',
        'Pharmacy coordination',
        'Prescription routing configuration',
        'Support workflow setup',
        'Internal testing and QA',
      ],
      day: 'Day 8–12',
      side: 'left',
    },
    {
      title: 'Testing, Training & Launch',
      description:
        'Final testing is completed, your team receives operational guidance, and your platform is prepared for launch. Once approved, your healthcare brand goes live and starts accepting patients.',
      steps: [
        'Final quality assurance',
        'Workflow testing',
        'Team guidance and training',
        'Go-live preparation',
        'Patient onboarding readiness',
      ],
      day: 'Day 13–15+',
      side: 'right',
    },
  ];

  private scrollHandler = this.updateScrollState.bind(this);

  ngAfterViewInit(): void {
    this.updateScrollState();
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
      window.addEventListener('resize', this.scrollHandler);
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.scrollHandler);
      window.removeEventListener('resize', this.scrollHandler);
    }
  }

  updateScrollState(): void {
    const native = this.timelineWrapper?.nativeElement;
    if (!native || typeof native.getBoundingClientRect !== 'function') {
      return;
    }

    const timelineRect = native.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const progressStart = viewportHeight * 0.2;
    const progressEnd = viewportHeight * 0.8;
    const rawProgress =
      (viewportHeight - timelineRect.top - progressStart) /
      (timelineRect.height + progressEnd - progressStart);
    this.progressHeight = Math.min(100, Math.max(0, rawProgress * 100));
    this.updateLineBounds();
    this.updateFirstCardFill();
    this.activeIndex = this.getActiveItemIndex();
  }

  private updateLineBounds(): void {
    const body = this.timelineBody?.nativeElement;
    if (!body || !this.timelineItems?.length) {
      return;
    }

    const bodyRect = body.getBoundingClientRect();
    const firstMarker = this.getMarkerElement(this.timelineItems.first?.nativeElement);
    const lastMarker = this.getMarkerElement(this.timelineItems.last?.nativeElement);

    if (!firstMarker || !lastMarker) {
      return;
    }

    const start = this.getElementCenterY(firstMarker) - bodyRect.top;
    const end = this.getElementCenterY(lastMarker) - bodyRect.top;

    body.style.setProperty('--timeline-line-start', `${Math.max(0, start)}px`);
    body.style.setProperty('--timeline-line-end', `${Math.max(0, end)}px`);
  }

  private getMarkerElement(row: HTMLElement | undefined): HTMLElement | null {
    return row?.querySelector('.launch-timeline__marker') ?? null;
  }

  private getElementCenterY(element: HTMLElement): number {
    const rect = element.getBoundingClientRect();
    return rect.top + rect.height / 2;
  }

  private updateFirstCardFill(): void {
    const body = this.timelineBody?.nativeElement;
    const firstItem = this.timelineItems?.first?.nativeElement;

    if (!body || !firstItem) {
      return;
    }

    const bodyRect = body.getBoundingClientRect();
    const firstItemRect = firstItem.getBoundingClientRect();
    const lineStart = parseFloat(
      getComputedStyle(body).getPropertyValue('--timeline-line-start') || '0',
    );
    const lineEnd = parseFloat(
      getComputedStyle(body).getPropertyValue('--timeline-line-end') || '100',
    );
    const totalLineHeight = lineEnd - lineStart;

    // First card middle to first card bottom
    const firstCardMiddle =
      firstItemRect.top + firstItemRect.height / 2 - bodyRect.top;
    const firstCardBottom =
      firstItemRect.top + firstItemRect.height - bodyRect.top;
    const firstCardFillHeight = firstCardBottom - firstCardMiddle;

    // How much of the total line height is the first card?
    const firstCardRatio =
      totalLineHeight > 0 ? (firstCardFillHeight / totalLineHeight) * 100 : 0;

    // What percentage of progress fills the first card?
    this.firstCardFillPercent = Math.min(
      100,
      Math.max(0, (this.progressHeight / firstCardRatio) * 100),
    );
  }

  private getActiveItemIndex(): number {
    if (!this.timelineItems?.length) {
      return 0;
    }

    const threshold = window.innerHeight * 0.75;
    let activeIndex = 0;
    this.timelineItems.forEach((item, index) => {
      const marker = this.getMarkerElement(item.nativeElement);
      const itemRect = marker
        ? marker.getBoundingClientRect()
        : item.nativeElement.getBoundingClientRect();
      if (itemRect.top < threshold) {
        activeIndex = index;
      }
    });

    return Math.min(activeIndex, this.timeline.length - 1);
  }
}
