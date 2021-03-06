import { AppService } from '../app.service';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

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

  constructor(public appService: AppService, private modalService: ModalService, private dialogRef: MatDialog) {

  }

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription

  //shold have done this on the backend side and used innerJoin ----- Refactor before implementing
  applicantsToJobs(applicant: Applicants) {
    let jobsApplied = applicant.jobs_applied || [];
    let jobsAppliedTo = [] as Array<Jobs>;  //create empty array
    for (let i = 0; i < jobsApplied.length; i++) {
      for (let j = 0; j < this.jobs.length; j++) {
        if (jobsApplied[i] === this.jobs[j].job_id) {
          jobsAppliedTo.push(this.jobs[j]);
        }
      }
    }
    return jobsAppliedTo;
  }
  //new applicant modal
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
  }

  
  //edit applicant modal
  openDialog(app_id: any, applicant: Applicants) {
    this.dialogRef.open(EditModalComponent, {
      data: applicant,
      });
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
