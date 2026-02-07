import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[animateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {

  private observer!: IntersectionObserver;
  private hasAnimatedCounters = false;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {
            // 🔥 Fade / Slide IN
            this.el.nativeElement.classList.add('animate');

            // 🔢 Animate numbers (only once per entry)
            if (!this.hasAnimatedCounters) {
              this.animateCounters();
              this.hasAnimatedCounters = true;
            }

          } else {
            // 🔥 Fade OUT
            this.el.nativeElement.classList.remove('animate');
            this.hasAnimatedCounters = false; // allow re-run on next scroll
          }

        });
      },
      {
        threshold: 0.25
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private animateCounters(): void {
    const counters = this.el.nativeElement.querySelectorAll<HTMLElement>('[data-count]');

    counters.forEach(counter => {
      const target = Number(counter.getAttribute('data-count'));
      if (isNaN(target)) return;

      let current = 0;
      const duration = 1200; // ms
      const startTime = performance.now();

      const update = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        current = Math.floor(progress * target);

        // Append + or % intelligently
        if (counter.getAttribute('data-suffix')) {
          counter.innerText = current + counter.getAttribute('data-suffix')!;
        } else {
          counter.innerText = current.toString();
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
