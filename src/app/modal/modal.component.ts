import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';

export interface NewApplicant {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  skills: string;
  experience: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  constructor(private appService:AppService) {
  }
  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();
  ngOnInit(): void {
    console.log('Modal init');
  }

  addApplicant = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    skills: new FormControl(''),
    experience: new FormControl(''),
  });

  SaveApplicant() {
    console.log(this.addApplicant.value);
    this.appService.addApplicant(this.addApplicant.value).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
  closeMe() {
    this.closeMeEvent.emit();
  }
  confirm() {
    this.confirmEvent.emit();
    this.SaveApplicant()
  }
  ngOnDestroy(): void {
    console.log(' Modal destroyed');
  }
}

