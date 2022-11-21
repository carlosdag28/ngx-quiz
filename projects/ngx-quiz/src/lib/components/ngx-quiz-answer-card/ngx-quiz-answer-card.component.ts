import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-quiz-answer-card',
  templateUrl: './ngx-quiz-answer-card.component.html',
  styleUrls: ['./ngx-quiz-answer-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxQuizAnswerCardComponent {
  @Input() displayImage: string;
  @Input() displayText: string;
  @Input() selected: boolean = false;

  @Output() ev_click: EventEmitter<void> = new EventEmitter();

  cardClick(): void {
    this.ev_click.emit();
  }
}
