import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AppService } from '../app.service';
import { ModalService } from '../shared/shared.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent extends HomeComponent {

  constructor(appService: AppService, modalService: ModalService) { 
    super(appService, modalService)
  }

}
