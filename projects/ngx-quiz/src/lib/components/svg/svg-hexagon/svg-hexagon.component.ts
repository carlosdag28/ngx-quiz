import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-svg-hexagon',
  template: `
    <svg viewBox="0 0 344 368" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_123_627)">
        <path
          d="M141.085 28.7148C160.376 18.285 183.624 18.285 202.915 28.7148L245.92 51.9668L287.559 77.5846C306.237 89.0755 317.861 109.21 318.474 131.13L319.84 180L318.474 228.87C317.861 250.79 306.237 270.925 287.56 282.415L245.92 308.033L202.915 331.285C183.624 341.715 160.376 341.715 141.085 331.285L98.08 308.033L56.4405 282.415C37.7629 270.925 26.1385 250.79 25.5259 228.87L24.16 180L25.5259 131.13C26.1385 109.21 37.7629 89.0755 56.4405 77.5846L98.08 51.9668L141.085 28.7148Z"
          fill="#049687"
        />
        <path
          d="M199.11 35.7521L241.918 58.8977L283.367 84.3983C299.746 94.475 309.94 112.131 310.477 131.354L311.837 180L310.477 228.646C309.94 247.869 299.746 265.525 283.367 275.602L241.918 301.102L199.11 324.248C182.194 333.394 161.806 333.394 144.89 324.248L102.081 301.102L60.6325 275.602C44.2537 265.525 34.06 247.869 33.5228 228.646L32.1631 180L33.5228 131.354C34.06 112.131 44.2537 94.475 60.6325 84.3983L102.082 58.8977L144.89 35.7521C161.806 26.606 182.194 26.606 199.11 35.7521Z"
          stroke="#22BDAD"
          stroke-width="16"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_123_627"
          x="0.160034"
          y="0.892578"
          width="343.68"
          height="366.215"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_123_627" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_123_627" result="shape" />
        </filter>
      </defs>
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
export class SvgHexagonComponent {}
