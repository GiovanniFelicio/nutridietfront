import { Patient } from './../../models/patient';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nd-patient-form-create',
  templateUrl: './patient-form-create.component.html',
  styleUrls: ['./patient-form-create.component.css']
})
export class PatientFormCreateComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  createForm(patient: Patient) {
    this.form = this.formBuilder.group({
      person: [patient.person]
    });
  }

  onSubmit() {
    console.log(this.form.value)
  }

}
