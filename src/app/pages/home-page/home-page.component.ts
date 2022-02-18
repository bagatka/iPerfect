import { Component } from '@angular/core';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ru';

import { SessionModel } from './home-page.model';


@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  readonly calendar: Array<SessionModel> = [
    {
      date: new Date('10/02/2021'),
      math: {
        title: 'Вычисления',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Вычисления и вектора',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('10/09/2021'),
      math: {
        title: 'Преобразования алгебраических выражений',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Вычисления и вектора',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('10/16/2021'),
      math: {
        title: 'Преобразования алгебраических выражений',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Механика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('10/23/2021'),
      math: {
        title: 'Преобразования алгебраических выражений',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Механика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('10/30/2021'),
      math: {
        title: 'Тригонометрия',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Механика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('11/06/2021'),
      math: {
        title: 'Тригонометрия',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Механика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('11/13/2021'),
      math: {
        title: 'Тригонометрия',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Механика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('11/20/2021'),
      math: {
        title: 'Уравнения',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Механика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('11/27/2021'),
      math: {
        title: 'Уравнения',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Молекулярная физика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('12/04/2021'),
      math: {
        title: 'Уравнения',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Молекулярная физика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('12/11/2021'),
      math: {
        title: 'Неравенства',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Молекулярная физика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('12/18/2021'),
      math: {
        title: 'Неравенства',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Молекулярная физика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('12/25/2021'),
      math: {
        title: 'Неравенства',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Молекулярная физика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('01/01/2022'),
      math: {
        title: 'Прогрессии',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Молекулярная физика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('01/08/2022'),
      math: {
        title: 'Прогрессии',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Электричество',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('01/15/2022'),
      math: {
        title: 'Прогрессии',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Электричество',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('01/22/2022'),
      math: {
        title: 'Логарифмы',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Электричество',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('01/29/2022'),
      math: {
        title: 'Логарифмы',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Электричество',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('02/05/2022'),
      math: {
        title: 'Логарифмы',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Электричество',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('02/12/2022'),
      math: {
        title: 'Геометрия - планиметрия',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Электричество',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('02/19/2022'),
      math: {
        title: 'Геометрия - планиметрия',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Оптика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('02/26/2022'),
      math: {
        title: 'Геометрия - планиметрия',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Оптика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('03/05/2022'),
      math: {
        title: 'Геометрия - стереометрия',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Оптика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('03/12/2022'),
      math: {
        title: 'Геометрия - стереометрия',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Оптика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('03/19/2022'),
      math: {
        title: 'Геометрия - стереометрия',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Оптика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('03/26/2022'),
      math: {
        title: 'Текстовые задачи',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Колебания и волны',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('04/02/2022'),
      math: {
        title: 'Текстовые задачи',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Колебания и волны',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('04/09/2022'),
      math: {
        title: 'Текстовые задачи',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Колебания и волны',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('04/16/2022'),
      math: {
        title: 'Нестандартные задачи',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Атомная и ядерная физика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('04/23/2022'),
      math: {
        title: 'Нестандартные задачи',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Атомная и ядерная физика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('04/30/2022'),
      math: {
        title: 'Нестандартные задачи',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Атомная и ядерная физика',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('05/07/2022'),
      math: {
        title: 'Общие принципы и методики решения',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Общие принципы и методики решения',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('05/14/2022'),
      math: {
        title: 'Общие принципы и методики решения',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Общие принципы и методики решения',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('05/21/2022'),
      math: {
        title: 'Общие принципы и методики решения',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Общие принципы и методики решения',
        time: '19:00 - 19:45'
      }
    },
    {
      date: new Date('05/28/2022'),
      math: {
        title: 'Общие принципы и методики решения',
        time: '19:00 - 19:45'
      },
      physics: {
        title: 'Общие принципы и методики решения',
        time: '19:00 - 19:45'
      }
    }
  ]

  formatDate(date: Date): string {
    return `${dayjs(date).locale('ru').format('DD MMMM')}`
  }
}
