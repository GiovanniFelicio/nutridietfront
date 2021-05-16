import { ObservableUtil } from './../utils/ObservableUtil';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractCrudOperations } from './../models/interfaces/abstract-crud-operations';

export abstract class CrudService<T, ID> implements AbstractCrudOperations<T, ID>{

  constructor(protected _http: HttpClient, protected _url: string) {
  }

  save(t: T): Observable<T> {
    return new ObservableUtil().getReturnAPI(this._http.post<T>(this._url, t));
  }

  update(id: ID, t: T): Observable<T> {
    return new ObservableUtil().getReturnAPI(this._http.put<T>(this._url+id+'/', t, {}));
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(this._url+id+'/');
  }

  findAll(): Observable<T[]> {
    return null;
  }

  delete(id: ID): Observable<any> {
    return null;
  }
}
