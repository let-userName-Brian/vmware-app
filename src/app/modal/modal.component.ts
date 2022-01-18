import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { NgModel } from '@angular/forms';

export interface NewApplicant {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  skills: Array<string>;
  experience: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  constructor() {
  }
  @Input() NgModel:NewApplicant = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  skills: [],
  experience: '',
  }; 
  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();
  ngOnInit(): void {
    console.log('Modal init');
  }

  closeMe() {
    this.closeMeEvent.emit();
  }
  confirm() {
    this.confirmEvent.emit();
    console.log(this.NgModel.first_name);
  }
  ngOnDestroy(): void {
    console.log(' Modal destroyed');
  }
}

