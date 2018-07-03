import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { MdModule } from '../md/md.module';

import components from './components';
import services from './services';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    MdModule,
  ],
  declarations: [
    ...components,
  ],
  providers: [
    ...services,
  ],
})
export class LandingModule {
}
