import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyComponent } from './policy.component';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [PolicyComponent],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports :[PolicyComponent]
})
export class PolicyModule { }
