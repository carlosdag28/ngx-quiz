import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxQuizActionsComponent } from './ngx-quiz-actions.component';
import { NgxQuizActionButtonModule } from './ngx-quiz-action-button/ngx-quiz-action-button.module';

@NgModule({
  declarations: [NgxQuizActionsComponent],
  imports: [CommonModule, NgxQuizActionButtonModule],
  exports: [NgxQuizActionsComponent]
})
export class NgxQuizActionsModule {}
