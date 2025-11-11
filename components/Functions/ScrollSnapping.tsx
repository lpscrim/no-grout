import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface SnapScrollOptions {
  panels: HTMLElement[];
  duration?: number;
  offset?: number; // Add offset option
  onSnapStart?: () => void;
  onSnapComplete?: () => void;
}

export class ScrollSnapping {
  private triggers: ScrollTrigger[] = [];
  private tops: ScrollTrigger[] = [];
  private panels: HTMLElement[];
  private duration: number;
  private offset: number;
  private onSnapStart?: () => void;
  private onSnapComplete?: () => void;

  constructor({ panels, duration = 0.5, offset = 0, onSnapStart, onSnapComplete }: SnapScrollOptions) {
    this.panels = panels;
    this.duration = duration;
    this.offset = offset;
    this.onSnapStart = onSnapStart;
    this.onSnapComplete = onSnapComplete;
  }

  init(): void {
    this.cleanup();
    
    if (this.panels.length === 0) return;

    // Create snap tracking triggers with the same offset logic as scrollToProject
    this.tops = this.panels.map(panel => 
      ScrollTrigger.create({
        trigger: panel,
        start: `top top+=${this.offset}` // Use the same offset
      })
    );

    // Create the main snapping trigger
    const snapTrigger = ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          this.onSnapStart?.();
          
          const panelStarts = this.tops.map(st => st.start);
          const snapScroll = gsap.utils.snap(panelStarts, self.scroll());
          return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
        },
        duration: this.duration,
        onComplete: () => {
          this.onSnapComplete?.();
        }
      }
    });

    this.triggers.push(snapTrigger);
    this.triggers.push(...this.tops);
  }

  updatePanels(newPanels: HTMLElement[]): void {
    this.panels = newPanels;
    this.init();
  }

  setDuration(duration: number): void {
    this.duration = duration;
    this.init();
  }

  setOffset(offset: number): void {
    this.offset = offset;
    this.init();
  }

  cleanup(): void {
    this.triggers.forEach(trigger => trigger.kill());
    this.tops.forEach(trigger => trigger.kill());
    this.triggers = [];
    this.tops = [];
  }

  destroy(): void {
    this.cleanup();
  }
}

export function createScrollSnapping(options: SnapScrollOptions): ScrollSnapping {
  const snapping = new ScrollSnapping(options);
  snapping.init();
  return snapping;
}