import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applicants } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient: HttpClient) { }

  getApplicants(): Observable<any> {
    return this.httpClient.get('http://localhost:3001/applicants');
  }

  getJobs(): Observable<any> {
    return this.httpClient.get('http://localhost:3001/jobs');
  }

  getCanStartFilteredApplicants(): Observable<any> {
    return this.httpClient.get('http://localhost:3001/applicants/can_start_now');
  }

  addApplicant(data: Applicants): Observable<any> {
    console.log(data);
    return this.httpClient.post('http://localhost:3001/applicants', data);
  };

  deleteApplicant(app_id: any): Observable<any> {
    console.log("id in service func", app_id);
    return this.httpClient.delete('http://localhost:3001/applicants/' + app_id);
  };

  editApplicant(app_id: any, editedApplicant: Applicants): Observable<any> {
    console.log("id in service func", app_id);
    console.log("app in service func", editedApplicant);
    return this.httpClient.patch('http://localhost:3001/applicants/' + app_id, editedApplicant);
  }
};
