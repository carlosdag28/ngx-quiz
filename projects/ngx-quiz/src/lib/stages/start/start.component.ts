import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Quiz } from '../../shared/models/quiz';

@Component({
  selector: 'ngx-quiz-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartComponent {
  @Input() quiz: Quiz;
  @Output() ev_start = new EventEmitter<void>();

  constructor() {}

  startQuiz(): void {
    this.ev_start.emit();
  }
}
