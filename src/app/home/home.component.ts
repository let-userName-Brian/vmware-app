import { Component } from '@angular/core';
import { AppService } from '../app.service';

interface Applicants {
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


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  applicants:Applicants[] = [];

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.appService.getApplicants().subscribe(
      res => {
        this.applicants = res;
        console.log(this.applicants);
      });
  }
}
