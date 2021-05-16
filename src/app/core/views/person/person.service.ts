import { ObservableUtil } from './../../utils/ObservableUtil';
import { PersonAddress } from './models/person-address';
import { CepService } from './../../service/cep.service';
import { Observable, Subject } from 'rxjs';
import { EnumPersonRoutes } from './models/enum-person.routes';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './../../service/crud.service';
import { Person } from './models/person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends CrudService<Person, number>{

  constructor(protected _http: HttpClient, private cepService: CepService) {
    super(_http, EnumPersonRoutes.PERSONAPIV1);
  }

  findCEP(cep: number): Observable<PersonAddress> {
    const subject = new Subject<PersonAddress>();

    this.cepService.findCEP(cep)
      .subscribe(
        res => {
          let _resp: PersonAddress = PersonAddress.convertApiCepToPersonAddress(res);
          subject.next(_resp);
        });

    return subject.asObservable();
  }
}
