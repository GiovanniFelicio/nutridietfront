import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnumPersonPath } from './../../../../common/enum/person/enum-person.path';
import { EnumGenre } from '../../../../common/enum/person/enum-genre';
import { Person } from './../../../../common/models/person/person';
import { WindowComponent } from '../../../window/window.component';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentType } from '../../../../common/models/person/document-type';
import { PersonService } from './../person.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PersonAddress } from 'src/app/core/common/models/person/person-address';

@Component({
  selector: 'nd-person-manager',
  templateUrl: './person-manager.component.html',
  styleUrls: ['./person-manager.component.css']
})
export class PersonManagerComponent extends WindowComponent<Person> implements OnInit, AfterViewInit {

  constructor(private _router: Router, 
      protected _activatedRoute: ActivatedRoute, 
      private __personService: PersonService) {
    super(_router, _activatedRoute, __personService);
  }

  ngOnInit(): void {
    this.model = new Person();
    this.model.person_address = new PersonAddress();
  }

  ngAfterViewInit() {
  }

  manager(_model: Person) {
    this.__personService.manager(this.simpleContext, _model);
  }

  searchCEP() {
    this.__personService.findCEP(this.model.person_address.code)
      .subscribe(res => {
        this.model.person_address = res;
      });
  }

  getGenderTypes () {
    return new EnumGenre().getChoices();
  }

  getDocumentTypes() {
    return new DocumentType().getChoices();
  }

  getColumnsDocument(): string[] {
    return ['number', 'type', 'status', 'options'];
  }
  
  goBack() {
    this._router.navigate([EnumPersonPath.PERSONMODULE+EnumPersonPath.PERSON]);
  }
}
