import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-quiz-action-button',
  templateUrl: './ngx-quiz-action-button.component.html',
  styleUrls: ['./ngx-quiz-action-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxQuizActionButtonComponent {
  @Input() displayText: string;
  @Input() primary: boolean = true;
  @Input() disabled: boolean = false;

  @Output() ev_click: EventEmitter<null> = new EventEmitter();

  click(): void {
    this.ev_click.emit();
  }
}
