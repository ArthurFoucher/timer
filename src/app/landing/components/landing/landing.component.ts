import { Component, OnInit } from '@angular/core';
import { ClockService } from '../../services/clock';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'timer-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  public time$: Observable<number>;
  public clicked = 0;

  constructor(
    private clockService: ClockService,
  ) {
  }

  onClicked() {
    this.clicked += 1;
    if (this.clicked % 2 === 1) {
      this.time$ = this.clockService.startClock();
    } else {
      this.time$ = null;
      this.clockService.stopClock();
    }
  }
}
