import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-quiz-actions',
  templateUrl: './ngx-quiz-actions.component.html',
  styleUrls: ['./ngx-quiz-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxQuizActionsComponent {
  @Input() prevVisible: boolean = true;
  @Input() nextVisible: boolean = true;

  @Output() ev_next: EventEmitter<void> = new EventEmitter();
  @Output() ev_prev: EventEmitter<void> = new EventEmitter();

  prevQuestion = (): void => this.ev_prev.emit();

  nextQuestion = (): void => this.ev_next.emit();
}
