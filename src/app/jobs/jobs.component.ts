import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AppService } from '../app.service';
import { ModalService } from '../shared/shared.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent extends HomeComponent {

  constructor(appService: AppService, modalService: ModalService, dialogRef: MatDialog) {
    super(appService, modalService, dialogRef);
  }

}
