import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'src/app/services/booking/booking.service';
import { IReserve } from 'src/app/shared/models/reserveRequest.model';

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss']
})
export class FormBookingComponent implements OnInit {

  public formGroupBooking: FormGroup;
  private dataReserve: IReserve;
  @Input() experienceId?: string;
  public errorHandler: string;

  constructor(private formBuilder: FormBuilder,
    private bookingService: BookingService,
  ) { }

  ngOnInit(): void {
    this.formBookingInit();
    console.log('Experience ID: ' + this.experienceId)
  }

  private formBookingInit(): void {
    this.formGroupBooking = this.formBuilder.group({
      booking_date_start: ['', [Validators.required, this.validateDate]],
      booking_date_end: ['', [Validators.required, this.validateDate]],
      comments: ['', Validators.required]
    }, {
      validators: this.validateDateRange()
    });
  }

  private validateDateRange() {
    return (formGroup: FormGroup) => {
      const controlBookingDateStart = formGroup.controls['booking_date_start'];
      const controlBookingDateEnd = formGroup.controls['booking_date_end'];

      if (new Date(controlBookingDateStart.value) > new Date(controlBookingDateEnd.value)) {
        controlBookingDateEnd.setErrors({ mustGreaterThan: true })
      }
    }
  }


  public booking(): void {
    const data = this.formGroupBooking.value;
    this.dataReserve = this.formGroupBooking.value;
    this.dataReserve.experience_id = this.experienceId;
    console.log('Request /booking ' + this.dataReserve);
    this.bookingService.reserve(this.dataReserve).subscribe(
      response => {
        if (response.status == 1) {
          console.log('Response /booking ' + response);
          this.errorHandler = 'Reserva exitosa : ' + response.response._id;
        } else {
          this.errorHandler = 'Reserva no realizada';
        }
      }
    );

  }

  public validateDate(control: AbstractControl) {

    const date = control.value;
    const dateNow = new Date();
    let errors = null;
    let caracter = '-';
    let arrayDate = date.split(caracter);

    if (parseInt(arrayDate[0]) <= dateNow.getFullYear() &&
      parseInt(arrayDate[1]) <= (dateNow.getMonth() + 1) &&
      parseInt(arrayDate[2]) < dateNow.getDate()) {
      errors = { dateError: 'La fecha debe ser mayor o igual a la fecha actual' };
    }


    return errors;
  }

  public getError(controlName: string) {
    let error = '';
    const control = this.formGroupBooking.get(controlName);
    console.log(control.getError);
    if (control.touched && control.errors != null) {
      error = this.errorMapping(control.errors)
    }
    return error;
  }

  private errorMapping(errors: any) {

    let errorMessage = '';

    if (errors.required) {
      errorMessage += 'Campo requerido. ';
    }

    if (errors.dateError) {
      errorMessage += errors.dateError;
    }

    if (errors.mustGreaterThan) {
      errorMessage += 'La fecha final debe ser mayor que la fecha inicial. ';
    }

    return errorMessage;
  }

}