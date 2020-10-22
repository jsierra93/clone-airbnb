import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { ILoginModel } from 'src/app/shared/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroupLogin: FormGroup;
  public dataLogin: ILoginModel;
  public responseLogin: string;

  constructor(private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.formLoginInit();
  }

  private formLoginInit(): void {
    this.formGroupLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  public login(): void {
    this.dataLogin = this.formGroupLogin.value;
    this.userService.login(this.dataLogin).subscribe(
      response => {
        if (response.status == 1) {
           this.router.navigate(['/home']);
           localStorage.setItem('token', response.token);
        }else{
          this.responseLogin = 'Usuario/Clave incorrecta'
        }
      }
    );

  }

}
