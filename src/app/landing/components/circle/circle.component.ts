import { Component, Input, OnChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

enum CircleState {
  full = 'full',
  empty = 'empty',
}

@Component({
  selector: 'timer-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  animations: [
    trigger('circleState', [
      state(CircleState.empty, style({
        strokeDashoffset: 1000,
      })),
      state(CircleState.full, style({
        strokeDashoffset: 500,
      })),
      transition('empty => full', animate('30s linear')),
    ]),
  ],
})
export class CircleComponent implements OnChanges {
  public state: CircleState;
  public x: number;
  public y: number;
  public radius: number;
  public dimension: number;
  @Input() clicked: number;
  private radConst = 15.91549431;
  private pos = 16.91549431;
  private factor = 5;

  constructor() {
    this.x = this.factor * this.pos;
    this.y = this.factor * this.pos;
    this.radius = this.factor * this.radConst;
    this.dimension = 2 * this.factor * this.pos;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.state = changes.clicked.currentValue % 2 === 0 ? CircleState.empty : CircleState.full;
  }

}
