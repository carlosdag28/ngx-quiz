import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-quiz-medal-achieved',
  templateUrl: './ngx-quiz-medal-achieved.component.html',
  styleUrls: ['./ngx-quiz-medal-achieved.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxQuizMedalAchievedComponent {
  @Input() displayImage: string;
}
