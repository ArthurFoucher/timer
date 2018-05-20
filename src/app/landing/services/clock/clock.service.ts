import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import { scan, startWith, take } from 'rxjs/operators';

@Injectable()
export class ClockService {
  clock: Observable<number>;

  constructor() {
  }

  public startClock() {
    this.initClock();
    return this.clock;
  }

  public stopClock() {
    this.clock = null;
  }

  private initClock() {
    this.clock = interval(1000).pipe(
      startWith(0),
      scan(count => count + 1, -1),
      take(31),
    );
  }
}
