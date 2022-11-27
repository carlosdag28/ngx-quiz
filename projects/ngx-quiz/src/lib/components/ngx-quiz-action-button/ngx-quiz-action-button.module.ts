import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxQuizActionButtonComponent } from './ngx-quiz-action-button.component';
import { SvgPlayModule } from '../svg/svg-play/svg-play.module';
import { SvgArrowModule } from '../svg/svg-arrow/svg-arrow.module';
import { SvgRestartModule } from '../svg/svg-restart/svg-restart.module';

@NgModule({
  declarations: [NgxQuizActionButtonComponent],
  imports: [CommonModule, SvgPlayModule, SvgArrowModule, SvgRestartModule],
  exports: [NgxQuizActionButtonComponent]
})
export class NgxQuizActionButtonModule {}
