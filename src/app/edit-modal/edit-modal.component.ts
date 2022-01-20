import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Applicants } from '../home/home.component';
import { AppService } from '../app.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: Applicants, private dialogRef: MatDialog, public appService: AppService) {
    this.editedApplicant = data;
    this.app_id = this.data.app_id;
    // console.log('before edit', this.editedApplicant);
    // console.log('id', this.data.app_id);
  }
   
  editApplicant = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    skills: new FormControl(''),
    experience: new FormControl(''),
  });


  closeDialog() {
    this.dialogRef.closeAll();
  }

  confirmEdit() {
    //console.log('edited applicant', this.editApplicant.value);
    let editedApplicant = this.editApplicant.value;
    this.appService.editApplicant(this.app_id, editedApplicant).subscribe(
      res => {
        console.log('edited applicant', res);
        this.dialogRef.closeAll();
      },
      err => {
        console.log('err', err);
      });
      this.dialogRef.closeAll();
  }

  ngOnInit(): void {
    this.editApplicant = new FormGroup({
      first_name: new FormControl(this.data.first_name),
      last_name: new FormControl(this.data.last_name),
      email: new FormControl(this.data.email),
      phone: new FormControl(this.data.phone),
      skills: new FormControl(this.data.skills),
      experience: new FormControl(this.data.experience),
    });
  }

}
