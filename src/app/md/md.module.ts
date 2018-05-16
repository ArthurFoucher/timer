import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
  ]
})

export class MdModule {
}
