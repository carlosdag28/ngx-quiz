import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-arrow',
  template: `
    <svg [class.invert]="invert" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.90991 19.9201L15.4299 13.4001C16.1999 12.6301 16.1999 11.3701 15.4299 10.6001L8.90991 4.08008"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }

      svg {
        position: absolute;
        width: 100%;
        transition: all 0.1s;
      }

      .invert {
        transform: rotateY(180deg);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgArrowComponent {
  @Input() invert: boolean = false;
}
