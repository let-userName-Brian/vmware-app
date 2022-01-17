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

}


