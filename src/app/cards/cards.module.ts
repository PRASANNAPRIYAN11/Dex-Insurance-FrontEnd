import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './cards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../navbar/navbar.module';




@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarModule
  ],
  exports :[CardsComponent]
})
export class CardsModule { }
