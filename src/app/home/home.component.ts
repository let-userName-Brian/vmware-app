import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
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
  /** Based on the screen size, switch from standard to one column per row */
  applicants:Applicants[] = [];
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Jobs', cols: 2, rows: 1 },
          { title: 'Applicants', cols: 2, rows: 1 },
          { title: 'Who applied where?', cols: 2, rows: 1 },
          { title: 'When can they start?', cols: 2, rows: 1 },
        ];
      }

      return [
        { title: 'Jobs', cols: 2, rows: 1 },
        { title: 'Applicants', cols: 1, rows: 1, apps: this.applicants },
        { title: 'Who applied where?', cols: 1, rows: 2 },
        { title: 'When can they start?', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    public appService: AppService) { }

  ngOnInit() {
    this.appService.getApplicants().subscribe(
      res => {
        this.applicants = res;
        console.log(this.applicants);
      });
  }
}
