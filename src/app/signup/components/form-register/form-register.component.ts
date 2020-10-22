
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { IuserModel } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  public formGroupRegister: FormGroup;
  public dataUser: IuserModel;

  constructor(private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void{
    this.formGroupRegister = this.formBuilder.group({
      name: ['', Validators.required],
      phone:  ['', Validators.required],
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(16), this.validatePassword ]]
    });
  }

  public validatePassword(control: AbstractControl) {
    const password = control.value
    let error = null;
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if(!er.test(password)){
      error = { customError: 'Debes tener almenos una mayuscula, un número y ser de minimo 8 caracteres'};
    }
    return error;
  }

  public getError (controlName: string): string {
    let error = '';
    const control = this.formGroupRegister.get(controlName);
    if (control.touched && control.errors != null) {
      error = this.errorMapping(control.errors)
    }
    return error;
  }

  private errorMapping (errors: any) {
    console.log('errors', errors)
    let errorMessage = '';

    if(errors.required) {
      errorMessage += 'Campo requerido. ';
    }

    if(errors.customError){
      errorMessage += errors.customError;
    }

    if(errors.maxlength) {
      errorMessage += `La longitud máxima debe ser ${​​​​​​​errors.maxlength.requiredLength}​​​​​​​`;
    }

    if(errors.email){
      errorMessage += 'Debes ingresar un correo valido';
    }

    return errorMessage;
  }

  public register(): void {
    this.dataUser = this.formGroupRegister.value;
    this.userService.signup(this.dataUser).subscribe(
      response => {
        if (response.status == 1) {
         this.router.navigate(['/signin']);
        }
      }
    );
  }
}
