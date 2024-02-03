import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioRoutingModule } from './radio-routing.module';
import { HomeComponent } from './view/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RadioRoutingModule
  ],
  exports: [
    HomeComponent ],
  bootstrap: [HomeComponent]

})
export class RadioModule { }
