import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HomeComponent } from '../home/home.component';
import { ModalService } from '../shared/shared.service';
import { Applicants } from '../home/home.component';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})

export class ApplicantsComponent extends HomeComponent {

  constructor(appService: AppService, modalService: ModalService)  { 
    super(appService, modalService)
  }


  deleteApplicant(app_id: any) {
    console.log('id at app.ts',app_id);
    this.appService.deleteApplicant(app_id).subscribe(
      data => {
        console.log("data in promise func",data);
      },
      error => {
        console.log(error);
      }
    );
    
    this.applicants = this.applicants.filter(applicant => applicant.app_id !== app_id);
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
    this.ngOnInit();
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
    this.applicants.push(applicant);
  }

}


