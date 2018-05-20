import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { ClockService } from '../../services/clock';

@Component({ selector: 'timer-button', template: '' })
class ButtonMockComponent {
}

@Component({ selector: 'timer-circle', template: '' })
class CircleMockComponent {
  @Input() clicked;
}

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingComponent, ButtonMockComponent, CircleMockComponent],
      providers: [ClockService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
