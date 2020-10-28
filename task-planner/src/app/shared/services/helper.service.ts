import * as moment from 'moment';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  beatifyDate(date: string, srcFormat: string, destFormat: string): string {
    return moment(date, srcFormat).format(destFormat);
  }
}
