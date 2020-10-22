import { NgModule } from '@angular/core';
import { BookingComponent } from './booking.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [], 
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class BookingRoutingModule { }
