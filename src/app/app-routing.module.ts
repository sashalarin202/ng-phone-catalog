import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PhonesPageComponent } from './phones-page/phones-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'phones', component: PhonesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
