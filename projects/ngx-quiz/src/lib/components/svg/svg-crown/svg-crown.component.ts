import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-svg-crown',
  template: `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.7 18.9799H6.29999C5.87999 18.9799 5.40999 18.6499 5.26999 18.2499L2.12999 6.66986C1.53999 5.00986 2.22999 4.49986 3.64999 5.51986L7.54999 8.30986C8.19999 8.75986 8.93999 8.52986 9.21999 7.79986L10.98 3.10986C11.54 1.60986 12.47 1.60986 13.03 3.10986L14.79 7.79986C15.07 8.52986 15.81 8.75986 16.45 8.30986L20.11 5.69986C21.67 4.57986 22.42 5.14986 21.78 6.95986L18.74 18.2699C18.59 18.6499 18.12 18.9799 17.7 18.9799Z"
        fill="url(#paint0_linear_19_332)"
        stroke="url(#paint1_linear_19_332)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M5.5 22H18.5" stroke="url(#paint2_linear_19_332)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <defs>
        <linearGradient
          class="first-gradient"
          id="paint0_linear_19_332"
          x1="1.91873"
          y1="10.4824"
          x2="22.0086"
          y2="10.4824"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#f2994a" />
          <stop stop-color="#f2c94c" offset="1" />
        </linearGradient>
        <linearGradient
          class="second-gradient"
          id="paint1_linear_19_332"
          x1="11.9637"
          y1="1.98486"
          x2="11.9637"
          y2="18.9799"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#f3c64d" />
          <stop stop-color="#f3a64b" offset="1" />
        </linearGradient>
        <linearGradient class="third-gradient" id="paint2_linear_19_332" x1="12" y1="22" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <stop stop-color="#f3c64d" />
          <stop stop-color="#f3a64b" offset="1" />
        </linearGradient>
      </defs>
    </svg>
  `,
  styleUrls: ['svg-crown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgCrownComponent {}
