import { Component, Input, OnInit } from '@angular/core';
import { IExperience } from 'src/app/shared/models/experiences.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() experience: IExperience;

  constructor() { }

  ngOnInit(): void {
  }

}
