import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
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
    private router: Router,
    private experienceService: ExperienceService) {

  }

  ngOnInit(): void {
    this.getParams();
   /* if (localStorage.getItem('token') === null ){
      this.router.navigate(['/signin']);
    }*/
  
  }

  private getParams(): void {
    this.route.params.subscribe(params => {
      const id = params._id;
      this.experienceService.getExperienceById(id).subscribe(
        response => {
          this.experience = response.experience;
        }
      );
    });
  }

}
