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
  @ViewChild('timelineWrapper', { static: true }) timelineWrapper!: ElementRef<HTMLElement>;
  @ViewChild('timelineBody', { static: true }) timelineBody!: ElementRef<HTMLElement>;
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('timelineAnchor') timelineAnchors!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('timelineMarker') timelineMarkers!: QueryList<ElementRef<HTMLElement>>;

  activeIndex = 0;
  progressHeight = 0;
  isMobile = false;
  private mobileBreakpoint = 768;

  timeline = [
    {
      title: 'Discovery & Onboarding',
      description: 'We begin by understanding your business model, treatment categories, pricing structure, and branding goals. Your account setup and onboarding process starts immediately.',
      steps: ['Business discovery call', 'Treatment category planning', 'Brand onboarding', 'Account setup initiation', 'Compliance and workflow discussion'],
      day: 'Day 1-3',
      side: 'left'
    },
    {
      title: 'Platform & Brand Configuration',
      description: 'Your telehealth platform is configured with your branding, workflows, treatment programs, pricing, intake forms, and operational settings.',
      steps: ['White-label branding setup', 'Intake and onboarding forms', 'Product and package configuration', 'Payment workflow setup', 'Dashboard and portal configuration'],
      day: 'Day 4-7',
      side: 'right'
    },
    {
      title: 'Provider, Pharmacy & Workflow Integration',
      description: 'We connect your workflows with providers, pharmacy fulfillment partners, and operational support systems to ensure everything is functioning smoothly.',
      steps: ['Provider workflow setup', 'Pharmacy coordination', 'Prescription routing configuration', 'Support workflow setup', 'Internal testing and QA'],
      day: 'Day 8-12',
      side: 'left'
    },
    {
      title: 'Testing, Training & Launch',
      description: 'Final testing is completed, your team receives operational guidance, and your platform is prepared for launch. Once approved, your healthcare brand goes live and starts accepting patients.',
      steps: ['Final quality assurance', 'Workflow testing', 'Team guidance and training', 'Go-live preparation', 'Patient onboarding readiness'],
      day: 'Day 13-15+',
      side: 'right'
    }
  ];

  private scrollHandler = this.updateScrollState.bind(this);

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      // Small timeout to allow structural layout cycles to settle completely
      setTimeout(() => { this.alignMarkersToSubheadings(); this.updateScrollState(); }, 200);
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
    const wrapper = this.timelineWrapper?.nativeElement;
    if (!wrapper) return;

    const isMobileNow = typeof window !== 'undefined' && window.innerWidth <= this.mobileBreakpoint;
    if (isMobileNow !== this.isMobile) {
      this.isMobile = isMobileNow;
      wrapper.classList.toggle('is-mobile', this.isMobile);
      if (!this.isMobile) {
        setTimeout(() => this.alignMarkersToSubheadings(), 50);
      }
    }

    if (!this.isMobile) {
      this.calculateContinuousProgress();
    }
  }

  /**
   * Aligns the center day badges with the card subheadings.
   */
  private alignMarkersToSubheadings(): void {
    if (this.isMobile || !this.timelineItems?.length) return;

    const rows = this.timelineItems.toArray();
    const anchors = this.timelineAnchors.toArray();
    const markers = this.timelineMarkers.toArray();

    rows.forEach((row, i) => {
      const rowTop = row.nativeElement.getBoundingClientRect().top;
      const anchorTop = anchors[i].nativeElement.getBoundingClientRect().top;
      
      // Calculate where the subheading text sits relative to its row container frame
      const targetOffsetTop = anchorTop - rowTop;
      
      // Offset the corresponding central marker perfectly to that baseline point
      markers[i].nativeElement.style.transform = `translateY(${targetOffsetTop}px)`;
    });

    // Recalculate track bounds immediately after elements complete alignment shifts
    this.updateLineTrackBounds();
  }

  private updateLineTrackBounds(): void {
    const body = this.timelineBody?.nativeElement;
    if (!body || !this.timelineMarkers?.length) return;

    const bodyRect = body.getBoundingClientRect();
    const firstMarker = this.timelineMarkers.first.nativeElement.getBoundingClientRect();
    const lastMarker = this.timelineMarkers.last.nativeElement.getBoundingClientRect();

    // Line starts precisely at the bottom edge of the first badge and terminates at the top edge of the last badge
    const startOffset = firstMarker.bottom - bodyRect.top;
    const endOffset = lastMarker.top - bodyRect.top;

    body.style.setProperty('--timeline-line-start', `${startOffset}px`);
    body.style.setProperty('--timeline-line-end', `${endOffset}px`);
  }

  private calculateContinuousProgress(): void {
    const body = this.timelineBody?.nativeElement;
    if (!body) return;

    const bodyRect = body.getBoundingClientRect();
    const viewportCenter = window.innerHeight * 0.5;

    const lineStart = parseFloat(getComputedStyle(body).getPropertyValue('--timeline-line-start') || '0');
    const lineEnd = parseFloat(getComputedStyle(body).getPropertyValue('--timeline-line-end') || '0');
    const totalLineHeight = lineEnd - lineStart;

    if (totalLineHeight <= 0) return;

    const currentScrollPosInBody = viewportCenter - bodyRect.top;
    const scrollProgressInLine = currentScrollPosInBody - lineStart;

    const rawPercent = (scrollProgressInLine / totalLineHeight) * 100;
    this.progressHeight = Math.min(100, Math.max(0, rawPercent));

    // Evaluate active item state index based on markers crossing the viewport center
    let currentActive = 0;
    const markers = this.timelineMarkers.toArray();
    markers.forEach((marker, index) => {
      if (marker.nativeElement.getBoundingClientRect().top <= viewportCenter) {
        currentActive = index;
      }
    });
    this.activeIndex = currentActive;
  }
}