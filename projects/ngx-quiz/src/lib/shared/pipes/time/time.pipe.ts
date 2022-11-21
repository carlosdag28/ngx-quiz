import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
  transform(seconds: number, ...args: unknown[]): string {
    return Math.floor(+seconds / 60) + ' minutes';
  }
}
