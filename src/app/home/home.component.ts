import { Component } from '@angular/core';
import { AppService } from '../app.service';

export interface Applicants {
  app_id: number,
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  skills: Array<string>,
  experience: string,
  jobs_applied: Array<number>,
  can_start_now: boolean,
}

interface Jobs {
  job_id: number,
  title: string,
  description: string,
  skills: Array<string>,
  experience: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  applicants:Applicants[] = [];
  jobs:Jobs[] = [];
  canStartNow:Array<Applicants> = [];

  constructor(public appService: AppService) { }

  addApplicantButtonClicked(applicant:Applicants) {
    this.appService.addApplicant(applicant).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
  ngOnInit() {
    this.appService.getApplicants().subscribe(
      res => {
        this.applicants = res;
      });
      
      this.appService.getJobs().subscribe(
        res => {
          this.jobs = res;
        }
        );

        this.appService.getCanStartFilteredApplicants().subscribe(
          res => {
            this.canStartNow = res;
            console.log(this.canStartNow);
          });
  }
}
