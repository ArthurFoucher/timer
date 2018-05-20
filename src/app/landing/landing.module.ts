import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { MdModule } from '../md/md.module';

import components from './components';
import services from './services';
import { CircleComponent } from './components/circle/circle.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    MdModule,
  ],
  declarations: [
    ...components,
    CircleComponent,
  ],
  providers: [
    ...services,
  ],
})
export class LandingModule {
}
