import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import { IExperiencesResponse } from 'src/app/shared/models/experiencesResponse.model';
import { IETopResponse } from 'src/app/shared/models/TopResponse.model';
import { IDetail } from 'src/app/shared/models/detail.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private urlApi: string = 'https://bankairbnbapp.herokuapp.com';

  constructor(private httpsClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http error', error);
    return throwError('Error llamando api ' + error.message);
  }

  public getExperience(): Observable<IExperiencesResponse> {
    const url = `${this.urlApi}/experiences`;
    return this.httpsClient.get<IExperiencesResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getExperienceTop(): Observable<IETopResponse> {
    const url = `${this.urlApi}/experiences/top5`;
    return this.httpsClient.get<IETopResponse>(url).pipe(
            retry(2), catchError(this.handlerError)
    );
  }
  public getExperienceById(id: number): Observable<IDetail> {
    const url = `${this.urlApi}/experiences/detail/${id}`;
    return this.httpsClient.get<IDetail>(url).pipe(
            retry(2), catchError(this.handlerError)
    );
   
  }
}
