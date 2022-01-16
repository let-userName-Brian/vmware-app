import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient:HttpClient) { }

  getApplicants(): Observable<any> {
    return this.httpClient.get('http://localhost:3001/applicants');
  }
}
