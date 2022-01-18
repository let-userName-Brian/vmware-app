import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HomeComponent } from '../home/home.component';
import { ModalService } from '../shared/shared.service';

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



}


