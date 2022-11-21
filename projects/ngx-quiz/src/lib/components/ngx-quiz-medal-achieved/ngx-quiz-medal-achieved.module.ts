import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxQuizMedalAchievedComponent } from './ngx-quiz-medal-achieved.component';
import { SvgHexagonComponent } from '../svg/svg-hexagon/svg-hexagon.component';
import { SvgMedalComponent } from '../svg/svg-medal/svg-medal.component';

@NgModule({
  declarations: [NgxQuizMedalAchievedComponent, SvgHexagonComponent, SvgMedalComponent],
  imports: [CommonModule],
  exports: [NgxQuizMedalAchievedComponent]
})
export class NgxQuizMedalAchievedModule {}
