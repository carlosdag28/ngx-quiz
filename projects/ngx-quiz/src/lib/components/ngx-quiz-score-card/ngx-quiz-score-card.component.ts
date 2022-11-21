import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-quiz-score-card',
  templateUrl: './ngx-quiz-score-card.component.html',
  styleUrls: ['./ngx-quiz-score-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxQuizScoreCardComponent {
  @Input() score: number;
  @Input() name: string;
  @Input() level: string;
  @Input() duration: number;
  @Input() totalStars: number;
  @Input() achievedStars: number;
}
