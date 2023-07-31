import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: any, args: string | null, type: string): string {
    if (!args) return value;
    if (type === 'full') {
      const re = new RegExp('\\b(' + args + '\\b)', 'igm');
      value = value.replace(re, '<span class="highlighted-text">$1</span>');
    } else {
      const re = new RegExp(args.trim().split(' ').join('|'), 'igm');
      value = value.replace(re, '<span class="highlighted-text">$&</span>');
    }

    return value;
  }
}
