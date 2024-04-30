import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PolicyComponent } from './policy/policy.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {
    path:'',
    component :LoginComponent
  },
  {
    path:'policy',
    component :PolicyComponent
  },
  {
    path:'cards',
    component :CardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
