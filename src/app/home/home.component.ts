import { AppService } from '../app.service';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../shared/shared.service';

export interface Applicants {
  app_id?: number,
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  skills?: string,
  experience: string,
  jobs_applied?: Array<number>,
  can_start_now?: boolean,
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
export class HomeComponent implements OnInit, OnDestroy {
  applicants: Applicants[] = [];
  jobs: Jobs[] = [];
  canStartNow: Array<Applicants> = [];

  constructor(public appService: AppService, private modalService: ModalService) {

  }

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription  
  
  openModal() {
    this.modalService.openModal(this.entry, {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      skills: '',
      experience: '',
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  addApplicantButtonClicked(applicant: Applicants) {
    this.appService.addApplicant(applicant).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    //update component when applicants are added
    this.sub = this.appService.getApplicants().subscribe(
      (data) => {
        this.applicants = data;
        this.canStartNow = this.applicants.filter(applicant => applicant.can_start_now);
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
        console.log('apps at home', this.applicants);
      });

    this.appService.getJobs().subscribe(
      res => {
        this.jobs = res;
      }
    );

    this.appService.getCanStartFilteredApplicants().subscribe(
      res => {
        this.canStartNow = res;
      });

      
  }
}
