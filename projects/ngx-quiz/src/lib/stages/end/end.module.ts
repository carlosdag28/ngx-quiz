import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndComponent } from './end.component';

import { NgxQuizScoreCardModule } from '../../components/ngx-quiz-score-card/ngx-quiz-score-card.module';
import { NgxQuizMedalAchievedModule } from '../../components/ngx-quiz-medal-achieved/ngx-quiz-medal-achieved.module';
import { NgxQuizActionButtonModule } from '../../components/ngx-quiz-actions/ngx-quiz-action-button/ngx-quiz-action-button.module';

@NgModule({
  declarations: [EndComponent],
  imports: [CommonModule, NgxQuizActionButtonModule, NgxQuizMedalAchievedModule, NgxQuizScoreCardModule],
  exports: [EndComponent]
})
export class EndModule {}
