import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  {
    path: '',
    component: Page404Component,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [], 
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ErrorPageRoutingModule { }
