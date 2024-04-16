import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, startWith } from 'rxjs';
import { CounterDate } from './model/counter.interface';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);


@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private target = dayjs().add(47, 'day').add(8, 'hour');
  public targetDate = this.target.format('D MMM YYYY');
  public countdown$ = new BehaviorSubject<CounterDate>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  constructor() {
    interval(1000).subscribe(() => {
      const now = dayjs();
      const diff = this.target.diff(now);
      const countdownDuration = dayjs.duration(diff);
      const countdownObject = {
        days: Math.floor(countdownDuration.asDays()),
        hours: countdownDuration.hours(),
        minutes: countdownDuration.minutes(),
        seconds: countdownDuration.seconds(),
      };
      this.countdown$.next(countdownObject);
    });
  }
}
