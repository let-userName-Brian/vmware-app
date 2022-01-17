import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})

export class ApplicantsComponent extends HomeComponent {

  constructor(appService: AppService) { 
    super(appService)
  }

}


