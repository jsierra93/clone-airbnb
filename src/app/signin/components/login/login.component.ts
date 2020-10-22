import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroupLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLoginInit();
  }

  private formLoginInit(): void{
    this.formGroupLogin = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  public login(): void {
    const data = this.formGroupLogin.value;
    console.log('Informacion del login', data);
  }

}
