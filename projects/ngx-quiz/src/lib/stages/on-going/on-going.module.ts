import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnGoingComponent } from './on-going.component';
import { NgxQuizProgressBarModule } from '../../components/ngx-quiz-progress-bar/ngx-quiz-progress-bar.module';
import { ContainerWidthDirective } from '../../shared/directives/container-width.directive';
import { NgxQuizHeaderModule } from '../../components/ngx-quiz-header/ngx-quiz-header.module';
import { NgxQuizAnswerCardModule } from '../../components/ngx-quiz-answer-card/ngx-quiz-answer-card.module';
import { NgxQuizActionsModule } from '../../components/ngx-quiz-actions/ngx-quiz-actions.module';

@NgModule({
  declarations: [OnGoingComponent, ContainerWidthDirective],
  imports: [CommonModule, NgxQuizHeaderModule, NgxQuizAnswerCardModule, NgxQuizActionsModule, NgxQuizProgressBarModule],
  exports: [OnGoingComponent]
})
export class OnGoingModule {}
