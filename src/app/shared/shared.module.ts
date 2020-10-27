import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ScoreComponent } from './components/score/score.component';
import { TitleComponent } from './components/title/title.component';


//los @ se denominan decoradores
@NgModule({
  //en la declaracion registra cuales son los componentes, pipe o directivas que hacen parte 
  //de este modulo
  declarations: [TopbarComponent, ScoreComponent, TitleComponent],
  // el import importa modulos CommonModule es un modulo comun de angular
  imports: [
    CommonModule  ],
  //exports indica cuales son los componentes que van a quedar comportidos de este modulo 
  //para poder ser visibles en otros modulos
  exports: [
    TopbarComponent, ScoreComponent, TitleComponent
  ]
})
export class SharedModule { }
