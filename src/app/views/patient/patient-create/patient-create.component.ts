import { PatientCreateService } from './patient-create.service';
import { ButtonsComponent } from './../../../components/template/footer/buttons/buttons.component';
import { Person } from '../../person/models/person';
import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'nd-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  @ViewChild('form', { read: ViewContainerRef})
  form: ViewContainerRef

  @ViewChild('ndfooter', { read: ViewContainerRef})
  ndfooter: ViewContainerRef;

  person: Person = {
    name: '',
    date_birth: null,
    document: '',
    genre: '',
    status: ''
  }

  private buttonsFooter = ButtonsComponent;

  constructor(private patientCreateService: PatientCreateService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.patientCreateService._configFooter(this.ndfooter, this.buttonsFooter);
  }
}
