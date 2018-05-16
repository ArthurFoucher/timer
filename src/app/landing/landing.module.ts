import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { ButtonComponent } from './components';
import { MdModule } from '../md/md.module';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    MdModule,
  ],
  declarations: [ButtonComponent],
})
export class LandingModule {
}
