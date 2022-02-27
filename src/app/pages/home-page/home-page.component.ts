import { Component } from '@angular/core';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { TIMETABLE_DATA } from './home-page.data';

import { SessionModel } from './home-page.model';


@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  pastShown: boolean = false;
  tillEndShown: boolean = false;
  defaultActiveSessionsShown: number = 5;

  readonly calendar: Array<SessionModel> = TIMETABLE_DATA;
  readonly mailToLink = this.buildMailToLink();

  getSessions(): Array<SessionModel> {
    if (this.pastShown && this.tillEndShown) {
      return this.calendar;
    }

    let activeSessions = this.calendar
      .filter(
        session => {
          return this.pastShown
            ? true
            : session.date >= new Date();
        }
      );

    if (!this.tillEndShown) {
      activeSessions = activeSessions.slice(0, this.defaultActiveSessionsShown);
    }

    if (!this.pastShown) {
      return activeSessions;
    } else {
      return this.calendar
        .filter(session => session.date < new Date());
    }
  }

  formatDate(date: Date): string {
    return `${dayjs(date).locale('ru').format('DD MMMM')}`
  }

  private buildMailToLink(): string {
    const subject = encodeURIComponent('Регистрация в Школу для подготовки к ЦТ для поступающих на радиофизику РФиКТ БГУ');
    const body = encodeURIComponent('1. ФИО и дата рождения\n2. Город, номер школы\n3. Телефон\n4. E-mail\n5. Средний балл');

    return `mailto:kolchevsky@bsu.by?subject=${subject}&body=${body}`;
  }
}
