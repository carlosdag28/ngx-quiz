import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnGoingComponent } from './on-going.component';
import { NgxQuizProgressBarModule } from '../../components/ngx-quiz-progress-bar/ngx-quiz-progress-bar.module';
import { ContainerWidthDirective } from '../../shared/directives/container-width.directive';
import { NgxQuizHeaderModule } from '../../components/ngx-quiz-header/ngx-quiz-header.module';
import { NgxQuizAnswerCardModule } from '../../components/ngx-quiz-answer-card/ngx-quiz-answer-card.module';
import { NgxQuizActionButtonModule } from '../../components/ngx-quiz-action-button/ngx-quiz-action-button.module';

@NgModule({
  declarations: [OnGoingComponent, ContainerWidthDirective],
  imports: [CommonModule, NgxQuizHeaderModule, NgxQuizAnswerCardModule, NgxQuizProgressBarModule, NgxQuizActionButtonModule],
  exports: [OnGoingComponent]
})
export class OnGoingModule {}
