import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartComponent } from './start.component';
import { TimePipeModule } from '../../shared/pipes/time/time.pipe.module';
import { NgxQuizActionButtonModule } from '../../components/ngx-quiz-actions/ngx-quiz-action-button/ngx-quiz-action-button.module';

@NgModule({
  declarations: [StartComponent],
  imports: [CommonModule, NgxQuizActionButtonModule, TimePipeModule],
  exports: [StartComponent]
})
export class StartModule {}
