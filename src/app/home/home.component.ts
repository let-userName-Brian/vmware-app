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
    this.modalService.openModal(this.entry, 'Confirm', 'Are you sure you want to add this applicant?');
    // this.modalService.subscribe(
    //   (data) => {
    //     if (data === 'confirm') {
    //       this.appService.addApplicant(applicant);
    //     }
    //   }
    // );
  }

  // openModal() {
  //   this.sub = this.modalService
  //     .openModal(this.entry, 'Are you sure ?', 'click confirm or close')
  //     // .subscribe((v) => {
  //     //   //your logic
  //     // });
  // }
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
