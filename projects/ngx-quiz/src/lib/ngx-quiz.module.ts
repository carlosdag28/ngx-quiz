import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxQuizComponent } from './ngx-quiz.component';
import { StartModule } from './stages/start/start.module';
import { OnGoingModule } from './stages/on-going/on-going.module';
import { EndModule } from './stages/end/end.module';

@NgModule({
  declarations: [NgxQuizComponent],
  imports: [CommonModule, StartModule, OnGoingModule, EndModule],
  exports: [NgxQuizComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgxQuizModule {}
