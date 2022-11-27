import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ButtonStyleConfig, ButtonType } from '../../shared/models/quiz';

@Component({
  selector: 'ngx-quiz-action-button',
  templateUrl: './ngx-quiz-action-button.component.html',
  styleUrls: ['./ngx-quiz-action-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxQuizActionButtonComponent implements OnInit {
  @Input() buttonType: ButtonType;
  @Input() buttonStyleConfig: ButtonStyleConfig;

  @Input() primary: boolean = true;
  @Input() disabled: boolean = false;

  @Output() ev_click: EventEmitter<null> = new EventEmitter();

  ngOnInit(): void {
    this.checkAndOverrideTypeOnEmptyText();
  }

  click(): void {
    this.ev_click.emit();
  }

  private checkAndOverrideTypeOnEmptyText(): void {
    if (this.buttonStyleConfig.displayType === 'text' && !this.buttonStyleConfig.displayText) {
      this.buttonStyleConfig.displayType = 'icon';
    }
  }
}
