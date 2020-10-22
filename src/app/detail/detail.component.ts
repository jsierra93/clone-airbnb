import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IExperience } from '../shared/models/experiences.model';
import { ExperienceService } from 'src/app/services/experience/experience.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public experience: IExperience;

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService) {

  }

  ngOnInit(): void {
    this.getParams();
  }

  private getParams(): void {
    this.route.params.subscribe(params => {
      const id = params._id;
      this.experienceService.getExperienceById(id).subscribe(
        response => {
          this.experience = response.experience;        }
      );
    });
  }

}
