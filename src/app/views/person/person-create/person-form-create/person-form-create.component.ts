import { Person } from '../../models/person';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nd-person-form-create',
  templateUrl: './person-form-create.component.html',
  styleUrls: ['./person-form-create.component.css']
})
export class PersonFormCreateComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Person());
  }

  createForm(person: Person) {
    this.form = this.formBuilder.group({
      name: [person.name],
      date_birth: [person.date_birth]
    });
  }

  onSubmit() {
    console.log(this.form.value)
  }
}
