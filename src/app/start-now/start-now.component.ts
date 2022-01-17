import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AppService } from '../app.service';
import { ModalService } from '../shared/shared.service';

@Component({
  selector: 'app-start-now',
  templateUrl: './start-now.component.html',
  styleUrls: ['./start-now.component.css']
})
export class StartNowComponent extends HomeComponent {

  constructor(appService: AppService, modalService: ModalService) {
    super(appService, modalService);
  }

}