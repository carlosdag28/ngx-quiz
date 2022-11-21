import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'progressIndex' })
export class ProgressIndexPipe implements PipeTransform {
  transform(index: number): number {
    return index + 1;
  }
}
