import { EnumPersonRoutes } from './models/enum-person.routes';
import { MessageService } from './../../service/message.service';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonDocument } from './models/person-document';
import { Person } from './models/person';
import { Injectable, Injector } from '@angular/core';
import { environments } from '../../api/environments';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends CrudService<object, number>{

  constructor(protected _http: HttpClient, protected injector: Injector) {
    super(_http, EnumPersonRoutes.PERSONAPIV1 , injector);
  }

  createForm (person: Person, formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      name: [person.name],
      date_birth: [person.date_birth],
      gender: [person.genre],
      documents: formBuilder.array([])
    });
  }

  createDocument(personDocument: PersonDocument, formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      number: personDocument.number,
      type: personDocument.type,
      status: personDocument.status
    });
  }
}
