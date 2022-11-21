import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-star',
  template: `
    <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.73 2.00965L13.49 5.52965C13.73 6.01965 14.37 6.48965 14.91 6.57965L18.1 7.10965C20.14 7.44965 20.62 8.92965 19.15 10.3896L16.67 12.8696C16.25 13.2896 16.02 14.0996 16.15 14.6796L16.86 17.7496C17.42 20.1796 16.13 21.1196 13.98 19.8496L10.99 18.0796C10.45 17.7596 9.56003 17.7596 9.01003 18.0796L6.02003 19.8496C3.88003 21.1196 2.58003 20.1696 3.14003 17.7496L3.85003 14.6796C3.98003 14.0996 3.75003 13.2896 3.33003 12.8696L0.850031 10.3896C-0.609969 8.92965 -0.139969 7.44965 1.90003 7.10965L5.09003 6.57965C5.62003 6.48965 6.26003 6.01965 6.50003 5.52965L8.26003 2.00965C9.22003 0.0996485 10.78 0.0996485 11.73 2.00965Z"
        [attr.fill]="'url(#paint0_linear_200_171_ngx_' + index + ')'"
      />
      <defs>
        <linearGradient
          class="first-gradient"
          [class.filled]="filled"
          id="paint0_linear_200_171_ngx_{{ index }}"
          x1="10.0022"
          y1="0.577148"
          x2="10.0022"
          y2="20.4154"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  `,
  styleUrls: ['./svg-star.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgStarComponent {
  @Input() filled: boolean = false;
  @Input() index: number = 0;
}
