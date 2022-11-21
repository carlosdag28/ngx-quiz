import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgStarComponent } from '../svg/svg-star/svg-star.component';
import { NgxQuizScoreCardComponent } from './ngx-quiz-score-card.component';
import { TimePipeModule } from '../../shared/pipes/time/time.pipe.module';

@NgModule({
  declarations: [NgxQuizScoreCardComponent, SvgStarComponent],
  imports: [CommonModule, TimePipeModule],
  exports: [NgxQuizScoreCardComponent]
})
export class NgxQuizScoreCardModule {}
