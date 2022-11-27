import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-svg-restart',
  template: `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M2 12C2 17.52 6.48 22 12 22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
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
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgRestartComponent {}
