import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { PersonAddress } from './../../../common/models/person/person-address';
import { Person } from './../../../common/models/person/person';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/core/service/crud.service';
import * as moment from 'moment';
import { paths } from 'src/app/core/api/environments';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends CrudService<Person, number>{

  constructor(protected _http: HttpClient,
    protected _snackBar: MatSnackBar) {
    super(_http, paths.person.base());
  }

  findCEP(cep: number): Observable<PersonAddress> {
    const subject = new Subject<PersonAddress>();

    this._http.get<object>(`https://ws.apicep.com/cep/${cep}.json`)
      .subscribe(
        res => {
          let _resp: PersonAddress = PersonAddress.convertApiCepToPersonAddress(res);
          subject.next(_resp);
        });

    return subject.asObservable();
  }  

  manager(simpleContext: object, model: Person): Observable<Person>  {
    if (model.date_birth) {
      model.date_birth = moment(model.date_birth).format('YYYY-MM-DD');
    }

    if (simpleContext['isNew']) {
      return this._save(model);
      // .subscribe((res) => {
      //   _router.navigate([EnumPersonPath.PERSONMODULE+EnumPersonPath.PERSONMANAGER, res['id']]);
      // });
    } else {
      return this._update(simpleContext['id'], model);
    }
  }
}
