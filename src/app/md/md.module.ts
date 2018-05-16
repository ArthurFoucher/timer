import {NgModule} from '@angular/core';
import {MatButtonModule, MatButtonToggleModule} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule
  ]
})

export class MdModule {
}
