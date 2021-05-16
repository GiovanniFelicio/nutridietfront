import { Person } from './../models/person';
import { WindowComponent } from './../../../components/window/window.component';
import { Router, ActivatedRoute } from '@angular/router';
import { EnumPersonRoutes } from './../models/enum-person.routes';
import { DocumentType } from '../models/document-type';
import { PersonService } from './../person.service';
import { EnumGenre } from './../models/enum-genre';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { PersonAddress } from '../models/person-address';

@Component({
  selector: 'nd-person-manager',
  templateUrl: './person-manager.component.html',
  styleUrls: ['./person-manager.component.css'],
  providers:[PersonService]
})
export class PersonManagerComponent extends WindowComponent<Person> implements OnInit, AfterViewInit {

  // dataSource = new MatTableDataSource(this.personDocuments);

  constructor(private _router: Router,protected activatedRoute: ActivatedRoute, private personService: PersonService) {
    super(activatedRoute, personService);
  }

  ngOnInit(): void {
    this.model = new Person();
    this.model.person_address = new PersonAddress();
    // this.formManager = this.personService.createForm(new Person(), this.formBuilder);
  }

  ngAfterViewInit() {
  }

  // getDocuments(): PersonDocument[] {
  //   return this.personDocuments;
  // }

  // addDocument(): void {
  //   this.getDocuments().push(this.personDocumentAux);
  //   this.dataSource = new MatTableDataSource(this.getDocuments());
  //   this.personDocumentAux = new PersonDocument();
  // }

  // removeDocument(documentIdx: number): void {
  //   delete this.getDocuments()[documentIdx];
  // }

  manager(_model: Person) {
    if (_model.date_birth) {
      _model.date_birth = moment(_model.date_birth).format('YYYY-MM-DD');
    }    

    if (this.isNew) {
      this.personService.save(_model).subscribe((res) => {
        this._router.navigate([EnumPersonRoutes.PERSONMODULE+EnumPersonRoutes.PERSONMANAGER.path, res['id']]);
      });
    } else {
      this.personService.update(this.id, this.model);
    }
  }

  searchCEP() {
    this.personService.findCEP(this.model.person_address.code)
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
    this._router.navigate([EnumPersonRoutes.PERSONMODULE+EnumPersonRoutes.PERSON.path]);
  }
}
