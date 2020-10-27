import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  public id: string;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
    if (localStorage.getItem('token') === null ){
      this.router.navigate(['/signin']);
    }
  }

  private getParams(): void {
    this.route.params.subscribe(params => {
     this.id = params._id;
    });
  }

}
