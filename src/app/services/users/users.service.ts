import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SignupResponseModel } from 'src/app/shared/models/signupResponse.model';
import { IuserModel } from 'src/app/shared/models/user.model';
import { ILoginResponseModel } from 'src/app/shared/models/loginResponse.model';
import { ILoginModel } from 'src/app/shared/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpsClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http error', error);
    return throwError('Error llamando api ' + error.message);
  }

  public login(dataLogin: ILoginModel): Observable<ILoginResponseModel> {
    const url = `${environment.urlBase}/users/login`;
    return this.httpsClient.post<ILoginResponseModel>(url, dataLogin).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public signup(dataUser: IuserModel): Observable<SignupResponseModel> {
    const url = `${environment.urlBase}/users/signup`;
    return this.httpsClient.post<SignupResponseModel>(url, dataUser).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

}
