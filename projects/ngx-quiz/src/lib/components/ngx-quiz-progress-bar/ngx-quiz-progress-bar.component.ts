import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-quiz-progress-bar',
  templateUrl: './ngx-quiz-progress-bar.component.html',
  styleUrls: ['./ngx-quiz-progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxQuizProgressBarComponent {
  @Input() value: number;
  @Input() max: number;
}
