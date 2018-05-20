import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'timer-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() clicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public onClick() {
    this.clicked.emit();
  }

}
