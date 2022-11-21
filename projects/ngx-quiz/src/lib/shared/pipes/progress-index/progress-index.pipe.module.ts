import { NgModule } from '@angular/core';

import { ProgressIndexPipe } from './progress-index.pipe';

@NgModule({
  declarations: [ProgressIndexPipe],
  exports: [ProgressIndexPipe]
})
export class ProgressIndexPipeModule {}
