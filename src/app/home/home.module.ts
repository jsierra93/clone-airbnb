import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { ExpListComponent } from './components/exp-list/exp-list.component';
import { ExpCardComponent } from './components/exp-card/exp-card.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent, RankingComponent, CardComponent, ExpListComponent, ExpCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
