import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-quiz-header',
  templateUrl: './ngx-quiz-header.component.html',
  styleUrls: ['./ngx-quiz-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxQuizHeaderComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() displayImage: string;

  @Input() horizontal: boolean = false;
  @Input() horizontalReverse: boolean = false;
}
