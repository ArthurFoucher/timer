import { Component } from '@angular/core';
import { ClockService } from '../../services/clock';
import { Observable } from 'rxjs/Observable';

enum State {
  start,
  stop,
}

@Component({
  selector: 'timer-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  public time$: Observable<number>;
  public state = State.stop;

  constructor(
    private clockService: ClockService,
  ) {
  }

  onClicked(): void {
    switch (this.state) {
      case State.stop:
        this.state = State.start;
        this.time$ = this.clockService.startClock();
        return;
      case State.start:
        this.time$ = null;
        this.clockService.stopClock();
        this.state = State.stop;
        return;
      default:
        this.state = State.stop;
        return;
    }
  }
}
