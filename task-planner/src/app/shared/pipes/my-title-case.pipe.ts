import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitleCase'
})
export class MyTitleCasePipe implements PipeTransform {

  transform(value: string): string {
    let rsl = '';
    const strings = value.split(' ');
    for (const str of strings) {
      const newStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      rsl += newStr + ' ';
    }
    return rsl.trim();
  }
}
