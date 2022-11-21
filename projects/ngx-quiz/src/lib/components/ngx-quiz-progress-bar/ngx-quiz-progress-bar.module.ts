import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxQuizProgressBarComponent } from './ngx-quiz-progress-bar.component';
import { SvgCrownModule } from '../svg/svg-crown/svg-crown.module';
import { ProgressIndexPipeModule } from '../../shared/pipes/progress-index/progress-index.pipe.module';

@NgModule({
  declarations: [NgxQuizProgressBarComponent],
  imports: [CommonModule, SvgCrownModule, ProgressIndexPipeModule],
  exports: [NgxQuizProgressBarComponent]
})
export class NgxQuizProgressBarModule {}
