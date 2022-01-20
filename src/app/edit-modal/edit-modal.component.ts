import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Applicants } from '../home/home.component';
import { AppService } from '../app.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

 editedApplicant: Applicants = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
  };

  app_id: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Applicants, private dialogRef: MatDialog, public appService: AppService,) {
    this.editedApplicant = data;
    this.app_id = this.app_id;
    console.log('modal apps', this.editedApplicant);
    console.log('id', this.data.app_id);

  }

 

  closeDialog() {
    this.dialogRef.closeAll();
  }

  refresh(): void {
    window.location.reload();
  }
  confirmEdit() {
    console.log('edited applicant', this.editedApplicant);
    this.appService.editApplicant(this.editedApplicant, this.app_id).subscribe(
      res => {
        console.log('edited applicant', res);
        this.dialogRef.closeAll();
      },
      err => {
        console.log('err', err);
      });
      this.dialogRef.closeAll();
      this,this.refresh();
  }

  ngOnInit(): void {
  }

}
